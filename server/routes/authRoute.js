// auth.route.js - Auth route module
const express = require('express');
const authController = require('../controllers/auth/authController');

const router = express.Router();

// Auth route
router.get(
    '/auth/generate', 
    authController.authenticate
);

router.get(
    '/auth/verify', 
    authController.verify
);

router.get(
    '/auth/clear', 
    authController.clear
);


module.exports = router;

