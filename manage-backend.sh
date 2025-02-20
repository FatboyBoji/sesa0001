#!/bin/bash

# Configuration
BACKEND_DIR="$HOME/webapp/sesa0001/server_backend"
PORT=45600

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Stop any existing processes
stop_server() {
    echo -e "${YELLOW}Stopping any existing processes...${NC}"
    pkill -f "node.*${PORT}" 2>/dev/null
    fuser -k ${PORT}/tcp 2>/dev/null
    sleep 2
}

# Start server
start_server() {
    cd "$BACKEND_DIR" || exit
    
    echo -e "${GREEN}Installing dependencies...${NC}"
    npm install
    
    echo -e "${GREEN}Building...${NC}"
    npm run build
    
    echo -e "${GREEN}Starting server...${NC}"
    NODE_ENV=production node dist/server.js &
    
    echo -e "${GREEN}Server started on port ${PORT}${NC}"
}

case "$1" in
    start)
        stop_server
        start_server
        ;;
    stop)
        stop_server
        ;;
    restart)
        stop_server
        start_server
        ;;
    *)
        echo "Usage: $0 {start|stop|restart}"
        exit 1
        ;;
esac

exit 0 