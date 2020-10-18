const express = require('express');
const verifyToken = require('../authentication/verifyToken');

const router = express.Router();

router.post(
    '/auth/verify',
    verifyToken,
    //user.verifyMail,
);
module.exports = router;