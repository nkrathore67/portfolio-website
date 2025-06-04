const fs = require('fs');
const path = require('path');

class Logger {
    static log(message) {
        const logMessage = `${new Date().toISOString()} - INFO: ${message}`;
        console.log(logMessage);
        this.writeToFile(logMessage);
    }

    static error(message) {
        const errorMessage = `${new Date().toISOString()} - ERROR: ${message}`;
        console.error(errorMessage);
        this.writeToFile(errorMessage);
    }

    static writeToFile(message) {
        const logFilePath = path.join(__dirname, 'app.log');
        fs.appendFile(logFilePath, message + '\n', (err) => {
            if (err) {
                console.error('Failed to write to log file:', err);
            }
        });
    }
}

module.exports = Logger;