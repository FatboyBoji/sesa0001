#!/bin/bash

# Configuration
APP_DIR="$HOME/webapp/sesa0001"
PID_FILE="$APP_DIR/.nextjs.pid"
LOG_FILE="$APP_DIR/.nextjs.log"
PORT=3000

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if the server is running
check_status() {
    if [ -f "$PID_FILE" ]; then
        pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null; then
            echo -e "${GREEN}Next.js server is running (PID: $pid)${NC}"
            return 0
        else
            rm "$PID_FILE"
            echo -e "${RED}Next.js server is not running (stale PID file removed)${NC}"
            return 1
        fi
    else
        echo -e "${RED}Next.js server is not running${NC}"
        return 1
    fi
}

# Start the server
start_server() {
    if check_status > /dev/null; then
        echo -e "${YELLOW}Server is already running!${NC}"
        return
    fi
    
    echo -e "${GREEN}Starting Next.js server...${NC}"
    cd "$APP_DIR" || exit
    nvm use 18
    npm run build
    NODE_ENV=production npm run start > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    sleep 2
    check_status
    echo -e "${GREEN}Server logs are available at: $LOG_FILE${NC}"
}

# Stop the server
stop_server() {
    if [ -f "$PID_FILE" ]; then
        pid=$(cat "$PID_FILE")
        echo -e "${YELLOW}Stopping Next.js server (PID: $pid)...${NC}"
        kill "$pid"
        rm "$PID_FILE"
        echo -e "${GREEN}Server stopped${NC}"
    else
        echo -e "${RED}No server is running${NC}"
    fi
}

# Restart the server
restart_server() {
    echo "Restarting Next.js server..."
    stop_server
    sleep 2
    start_server
}

# Show server logs
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
        start_server
        ;;
    stop)
        stop_server
        ;;
    restart)
        restart_server
        ;;
    status)
        check_status
        ;;
    logs)
        show_logs
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs}"
        exit 1
        ;;
esac

exit 0 