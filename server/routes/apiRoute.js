const express = require('express');
const authController = require('../controllers/auth/authController');
const loginController = require('../controllers/login/loginController');
const registerController = require('../controllers/register/registerController');

const router = express.Router();

/**
 * @swagger
 * /api/auth/generate:
 *   get:
 *    description:  
 */

// Auth route
router.get(
    '/auth/generate', 
    authController.authenticate
);


/**
 * @swagger
 * /api/auth/verify:
 *   get:
 *    description:  
 */

router.get(
    '/auth/verify', 
    authController.verify
);

/**
 * @swagger
 * /api/auth/clear:
 *   get:
 *    description:  
 */

router.get(
    '/auth/clear', 
    authController.clear
);

/**
 * @swagger
 * /api/login:
 *   post:
 *    description:  
 */

router.post(
    '/login',
    loginController.login
);

/**
 * @swagger
 * /api/register:
 *   post:
 *    description:  
 */

router.post(
    '/register',
    registerController.register
);

module.exports = router;