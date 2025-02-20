#!/bin/bash

# Configuration
BACKEND_DIR="$HOME/webapp/sesa0001/server_backend"
PID_FILE="/tmp/sesa_backend.pid"
LOG_FILE="/tmp/sesa_backend.log"
PORT=45600  # Updated to match production port
ENV=${1:-development} # Default to development if no environment specified

# Source bash profile and NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js and required version is available
check_node() {
    if ! command -v node &> /dev/null; then
        echo -e "${RED}Node.js is not installed${NC}"
        return 1
    fi

    if [[ "$(node --version)" == "v18"* ]]; then
        echo -e "${GREEN}Using Node.js $(node --version)${NC}"
    else
        echo -e "${YELLOW}Switching to Node.js 18...${NC}"
        nvm use 18 || return 1
    fi
}

# Check if TypeScript is installed
check_typescript() {
    if ! command -v tsc &> /dev/null; then
        echo -e "${YELLOW}TypeScript is not installed globally. Installing...${NC}"
        npm install -g typescript
    fi
    echo -e "${GREEN}TypeScript version: $(tsc --version)${NC}"
}

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

# Start the backend server
start_server() {
    if ! check_node; then
        return 1
    fi

    # Ensure TypeScript is installed
    if ! check_typescript; then
        return 1
    fi

    if check_status > /dev/null; then
        echo -e "${YELLOW}Backend server is already running!${NC}"
        return
    fi

    echo -e "${GREEN}Starting backend server in ${ENV} mode...${NC}"
    cd "$BACKEND_DIR" || exit

    # Clean previous build
    echo "Cleaning previous build..."
    rm -rf dist/

    # Install dependencies if needed
    echo "Installing dependencies..."
    npm install

    # Build TypeScript with more verbose output
    echo "Building TypeScript..."
    npm run build -- --listFiles --pretty
    
    # List contents of dist directory
    echo -e "${GREEN}Checking build output:${NC}"
    ls -la dist/

    # Check if build was successful
    if [ ! -f "dist/server.js" ]; then
        echo -e "${RED}Build failed - dist/server.js not found${NC}"
        echo -e "${YELLOW}Checking TypeScript configuration:${NC}"
        cat tsconfig.json
        return 1
    fi

    # Start server with specified environment and show more debug info
    echo "Starting server..."
    echo -e "${GREEN}Current directory: $(pwd)${NC}"
    echo -e "${GREEN}Node environment: $ENV${NC}"
    echo -e "${GREEN}Starting server with: node dist/server.js${NC}"
    NODE_ENV=$ENV node dist/server.js > "$LOG_FILE" 2>&1 &
    
    # Store PID
    local pid=$!
    echo $pid > "$PID_FILE"

    # Wait and check if process is still running
    sleep 5
    if ps -p $pid > /dev/null; then
        echo -e "${GREEN}Backend server started successfully (PID: $pid)${NC}"
        echo -e "${GREEN}Server logs are available at: $LOG_FILE${NC}"
        echo -e "${GREEN}Server is running on port: $PORT${NC}"
    else
        echo -e "${RED}Server failed to start. Checking logs:${NC}"
        tail -n 10 "$LOG_FILE"
        rm "$PID_FILE"
        return 1
    fi
}

# Stop the backend server
stop_server() {
    local any_process_killed=false

    # First try to kill by PID file
    if [ -f "$PID_FILE" ]; then
        pid=$(cat "$PID_FILE")
        echo -e "${YELLOW}Stopping backend server (PID: $pid)...${NC}"
        
        # Kill the main process and its children
        pkill -P "$pid" 2>/dev/null && any_process_killed=true
        kill -9 "$pid" 2>/dev/null && any_process_killed=true
        rm "$PID_FILE"
    fi

    # Then try to kill by port
    if pid_on_port=$(fuser ${PORT}/tcp 2>/dev/null); then
        echo -e "${YELLOW}Killing process on port ${PORT}...${NC}"
        fuser -k ${PORT}/tcp 2>/dev/null && any_process_killed=true
    fi

    # Finally try to kill any node process using this port
    if pids=$(pkill -f "node.*${PORT}" 2>/dev/null); then
        echo -e "${YELLOW}Killing Node.js processes using port ${PORT}...${NC}"
        any_process_killed=true
    fi

    # Wait a moment for processes to die
    sleep 2

    # Verify everything is stopped
    if fuser -n tcp ${PORT} >/dev/null 2>&1; then
        echo -e "${RED}Warning: Port ${PORT} is still in use${NC}"
        return 1
    else
        echo -e "${GREEN}Port ${PORT} is free${NC}"
    fi

    if [ "$any_process_killed" = true ]; then
        echo -e "${GREEN}Backend server stopped successfully${NC}"
    else
        echo -e "${YELLOW}No running processes found to stop${NC}"
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
case "$2" in
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
        echo "Usage: $0 {development|production} {start|stop|restart|status|logs}"
        exit 1
        ;;
esac

exit 0 