const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/User.model'); // Import UserModel

const appMiddleware = express.Router();

// Example middleware for logging requests
appMiddleware.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Example middleware for authentication check
appMiddleware.use((req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: 'Unauthorized' });
});

// Passport local strategy for authentication
passport.use(new LocalStrategy((username, password, done) => {
    // Replace with your user authentication logic
    UserModel.findOne({ username }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'Incorrect username.' });
        if (!user.verifyPassword(password)) return done(null, false, { message: 'Incorrect password.' });
        return done(null, user);
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err, user) => {
        done(err, user);
    });
});

// Export the middleware
module.exports = appMiddleware;