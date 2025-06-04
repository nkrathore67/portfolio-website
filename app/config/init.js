const dbConfig = require('./db.conf');
const appConfig = require('./app.conf');
const appKeys = require('./app.keys');
const dbKeys = require('./db.keys');

const initConfig = () => {
    // Load and initialize configurations
    const config = {
        db: dbConfig,
        app: appConfig,
        keys: {
            app: appKeys,
            db: dbKeys
        }
    };
    return config;
};

module.exports = initConfig();