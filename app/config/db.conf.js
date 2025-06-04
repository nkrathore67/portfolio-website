module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio',
    redisHost: process.env.REDIS_HOST || '127.0.0.1',
    redisPort: process.env.REDIS_PORT || 6379,
    dbOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};