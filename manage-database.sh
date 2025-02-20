#!/bin/bash

# Configuration
DB_NAME="sesa_news_db"
DB_USER="postgres"
DB_PORT="5000"
DB_BACKUP_DIR="$HOME/db_backups"
PID_FILE="/tmp/sesa_postgres.pid"
LOG_FILE="/tmp/sesa_postgres.log"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Ensure backup directory exists
mkdir -p "$DB_BACKUP_DIR"

# Check if PostgreSQL is installed
check_postgres() {
    if ! command -v postgres &> /dev/null; then
        echo -e "${RED}PostgreSQL is not installed${NC}"
        return 1
    fi
}

# Check database status
check_status() {
    if pg_isready -p $DB_PORT > /dev/null 2>&1; then
        echo -e "${GREEN}PostgreSQL is running on port $DB_PORT${NC}"
        return 0
    else
        echo -e "${RED}PostgreSQL is not running on port $DB_PORT${NC}"
        return 1
    fi
}

# Start database
start_database() {
    if check_status > /dev/null; then
        echo -e "${YELLOW}PostgreSQL is already running!${NC}"
        return
    fi

    echo -e "${GREEN}Starting PostgreSQL...${NC}"
    
    # Start PostgreSQL with custom port
    pg_ctl -D "$HOME/data" -o "-p $DB_PORT" start > "$LOG_FILE" 2>&1
    
    # Wait for database to start
    sleep 5
    
    if check_status > /dev/null; then
        echo -e "${GREEN}PostgreSQL started successfully${NC}"
        # Create database if it doesn't exist
        if ! psql -p $DB_PORT -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
            echo -e "${YELLOW}Creating database $DB_NAME...${NC}"
            createdb -p $DB_PORT $DB_NAME
            # Initialize database with schema
            if [ -f "./server_backend/db/init.sql" ]; then
                echo -e "${GREEN}Initializing database schema...${NC}"
                psql -p $DB_PORT -d $DB_NAME -f "./server_backend/db/init.sql"
            fi
        fi
    else
        echo -e "${RED}Failed to start PostgreSQL. Check logs at $LOG_FILE${NC}"
        return 1
    fi
}

# Stop database
stop_database() {
    if ! check_status > /dev/null; then
        echo -e "${YELLOW}PostgreSQL is not running${NC}"
        return
    fi

    echo -e "${YELLOW}Stopping PostgreSQL...${NC}"
    pg_ctl -D "$HOME/data" stop -m fast
    
    sleep 2
    
    if ! check_status > /dev/null; then
        echo -e "${GREEN}PostgreSQL stopped successfully${NC}"
    else
        echo -e "${RED}Failed to stop PostgreSQL${NC}"
        return 1
    fi
}

# Create backup
create_backup() {
    local timestamp=$(date +%Y%m%d_%H%M%S)
    local backup_file="$DB_BACKUP_DIR/${DB_NAME}_${timestamp}.sql"
    
    echo -e "${GREEN}Creating backup of $DB_NAME...${NC}"
    if pg_dump -p $DB_PORT -U $DB_USER $DB_NAME > "$backup_file"; then
        echo -e "${GREEN}Backup created successfully at:${NC}"
        echo "$backup_file"
    else
        echo -e "${RED}Backup failed${NC}"
        return 1
    fi
}

# Restore from backup
restore_backup() {
    if [ -z "$1" ]; then
        echo -e "${RED}Please provide backup file path${NC}"
        return 1
    fi

    if [ ! -f "$1" ]; then
        echo -e "${RED}Backup file not found: $1${NC}"
        return 1
    }

    echo -e "${YELLOW}Warning: This will overwrite the current database. Continue? (y/N)${NC}"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        echo -e "${GREEN}Restoring backup...${NC}"
        if psql -p $DB_PORT -U $DB_USER -d $DB_NAME < "$1"; then
            echo -e "${GREEN}Database restored successfully${NC}"
        else
            echo -e "${RED}Restore failed${NC}"
            return 1
        fi
    else
        echo "Restore cancelled"
    fi
}

# Show database logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        tail -f "$LOG_FILE"
    else
        echo -e "${RED}No log file found${NC}"
    fi
}

# Command handling
case "$1" in
    start)
        start_database
        ;;
    stop)
        stop_database
        ;;
    restart)
        stop_database
        sleep 2
        start_database
        ;;
    status)
        check_status
        ;;
    backup)
        create_backup
        ;;
    restore)
        restore_backup "$2"
        ;;
    logs)
        show_logs
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|backup|restore|logs}"
        echo "  restore requires backup file path as second argument"
        exit 1
        ;;
esac

exit 0 