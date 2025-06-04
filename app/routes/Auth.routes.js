const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserController = require('../controllers/User.controller');

// Render registration page
router.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register' });
});

// Registration route
router.post('/register', UserController.register);

// Login route
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true // Optional, if using flash messages
}));

// Logout route
router.post('/logout', UserController.logout);

// Password reset route
router.post('/reset-password', UserController.resetPassword);

module.exports = router;