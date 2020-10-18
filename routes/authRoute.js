// auth.route.js - Auth route module
const express = require('express');
const auth_controller = require('../controllers/authController');

const router = express.Router();

// Auth route
router.get(
    '/auth/generate', 
    auth_controller.authenticate
);

router.get(
    '/auth/verify', 
    auth_controller.verify
);

router.get(
    '/auth/clear', 
    auth_controller.clear
);


module.exports = router;

