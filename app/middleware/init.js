const express = require('express');
const AppMiddleware = require('./App.middleware');
const ErrorHandlerMiddleware = require('./ErrorHandler.middleware');

const initMiddleware = (app) => {
    // app.use(AppMiddleware);
    // app.use(ErrorHandlerMiddleware);

    // Example middleware
    // app.use((req, res, next) => {
    //     console.log('Middleware initialized');
    //     next();
    // });

    // Add other middleware here
};

module.exports = initMiddleware;