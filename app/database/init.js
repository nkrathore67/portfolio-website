const mongoose = require('mongoose');
const redis = require('redis');
const config = require('../config/db.conf.js');

const mongoClient = mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const redisClient = redis.createClient({
    host: config.redisHost,
    port: config.redisPort,
});

redisClient.on('connect', () => {
    console.log('Redis connected');
});

redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
});

module.exports = {
    mongoClient,
    redisClient,
};