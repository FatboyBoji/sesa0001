#!/bin/bash

# Configuration
BACKEND_DIR="server_backend"
PORT=45600
PID_FILE="$BACKEND_DIR/backend.pid"
LOG_FILE="$BACKEND_DIR/backend.log"

# Create necessary directories and files
init_files() {
    # Ensure backend directory exists
    if [ ! -d "$BACKEND_DIR" ]; then
        echo -e "${RED}Backend directory not found: $BACKEND_DIR${NC}"
        exit 1
    fi

    # Create or clear log file
    echo "" > "$LOG_FILE" || {
        echo -e "${RED}Cannot create/access log file: $LOG_FILE${NC}"
        exit 1
    }

    # Remove stale PID file if it exists
    if [ -f "$PID_FILE" ]; then
        rm "$PID_FILE"
    fi
}

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if the server is running
check_status() {
    if [ -f "$PID_FILE" ]; then
        pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null; then
            echo -e "${GREEN}Backend server is running (PID: $pid)${NC}"
            return 0
        else
            rm "$PID_FILE"
            echo -e "${RED}Backend server is not running (stale PID file removed)${NC}"
            return 1
        fi
    else
        echo -e "${RED}Backend server is not running${NC}"
        return 1
    fi
}

# Kill any process using our port
kill_port() {
    echo -e "${YELLOW}Killing any process on port ${PORT}...${NC}"
    fuser -k ${PORT}/tcp 2>/dev/null
    sleep 2
}

# Start the server
start_server() {
    init_files
    
    if check_status > /dev/null; then
        echo -e "${YELLOW}Server is already running!${NC}"
        return
    fi

    kill_port
    cd "$BACKEND_DIR" || exit
    
    echo -e "${GREEN}Setting up server...${NC}"
    npm install
    
    echo -e "${GREEN}Building...${NC}"
    npm run build
    
    echo -e "${GREEN}Starting production server...${NC}"
    NODE_ENV=production nohup node dist/server.js > "$LOG_FILE" 2>&1 &
    
    # Store PID
    echo $! > "$PID_FILE"
    
    # Wait a moment and check if process is still running
    sleep 3
    if check_status; then
        echo -e "${GREEN}Server started successfully${NC}"
        echo -e "${GREEN}Server logs are available at: $LOG_FILE${NC}"
    else
        echo -e "${RED}Server failed to start. Check logs:${NC}"
        tail -n 10 "$LOG_FILE"
        return 1
    fi
}

# Stop the server
stop_server() {
    if [ -f "$PID_FILE" ]; then
        pid=$(cat "$PID_FILE")
        echo -e "${YELLOW}Stopping backend server (PID: $pid)...${NC}"
        kill $pid 2>/dev/null
        rm "$PID_FILE"
        kill_port
        echo -e "${GREEN}Server stopped successfully${NC}"
    else
        echo -e "${YELLOW}No PID file found. Trying to kill by port...${NC}"
        kill_port
    fi
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
        stop_server
        sleep 2
        start_server
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