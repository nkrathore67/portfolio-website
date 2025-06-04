const express = require('express');
const app = express();
const path = require('path');
const config = require('./app/config/init');
const initMiddleware = require('./app/middleware/init');
const routes = require('./app/routes/App.routes');
const authRoutes = require('./app/routes/Auth.routes');
const dashboardRoutes = require('./app/routes/Dashboard.routes');
const passport = require('passport');
const session = require('express-session');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'app/views'));

// Initialize middleware
initMiddleware(app);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add session middleware
app.use(session({
    secret: 'your-secret-key', // Replace with a secure secret
    resave: false,
    saveUninitialized: false
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', routes);
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || config.app.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});