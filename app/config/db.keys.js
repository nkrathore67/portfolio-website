module.exports = {
    mongoURI: process.env.MONGO_URI || 'your_mongo_connection_string',
    redisHost: process.env.REDIS_HOST || 'localhost',
    redisPort: process.env.REDIS_PORT || 6379,
    redisPassword: process.env.REDIS_PASSWORD || 'your_redis_password'
};