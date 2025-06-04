const redis = require('redis');
const { promisify } = require('util');
const config = require('../config/db.conf');

const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
});

client.on('error', (err) => {
    console.error('Redis error: ', err);
});

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const RedisDatabase = {
    get: async (key) => {
        try {
            const value = await getAsync(key);
            return value;
        } catch (error) {
            throw new Error('Error getting value from Redis: ' + error.message);
        }
    },
    set: async (key, value) => {
        try {
            await setAsync(key, value);
            return true;
        } catch (error) {
            throw new Error('Error setting value in Redis: ' + error.message);
        }
    },
    // Additional Redis operations can be added here
};

module.exports = RedisDatabase;