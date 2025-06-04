const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/Dashboard.controller');

// Define routes related to the user dashboard
router.get('/dashboard', DashboardController.getDashboard);
router.get('/dashboard/stats', DashboardController.getDashboardStats);
router.get('/dashboard/settings', DashboardController.getDashboardSettings);

// Export the router
module.exports = router;