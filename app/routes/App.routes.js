const express = require('express');
const router = express.Router();
const AppController = require('../controllers/App.controller');
const UserController = require('../controllers/User.controller');

// Landing page route
router.get('/', AppController.landing);

// Section-specific routes
router.get('/academic-details', AppController.academicDetails);
router.get('/work-experience', AppController.workExperience);
router.get('/projects', AppController.projects);
router.get('/skills', AppController.skills);
router.get('/certifications', AppController.certifications);

// User-related routes
router.get('/user/profile', UserController.profile);
router.get('/user/settings', UserController.settings);

module.exports = router;