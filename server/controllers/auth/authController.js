// authController.js - Auth Controller module
const jwt = require('jsonwebtoken');
require('dotenv').config()
const fs = require('fs');
const path = require('path');

exports.authenticate = async (req, res) => {
    
    //const { email, name, role } = req.body;
    try {
        console.log('creating cookie');
        
        let payload = {'email': 'test_email', 'name': 'test_name', 'role': 'volunteer'};
        
        //access token      
        let accessToken = jwt.sign(
            payload, 
            process.env.PRIVATE_KEY, {
            algorithm: "RS256",
            expiresIn: '7d'
        });
        
        console.log('access cookie created successfully');

        res.cookie("AuthEbsToken", accessToken, {secure: false, httpOnly: true})
        res.send();
        
    } catch (error) {
        console.log('Error creating cookie');
        return res.status(500).json(error.toString());
    }

};


exports.verify = async (req, res, next) => {
    
    console.log('verifying cookie');

    try {

        let token = req.cookies['AuthEbsToken'];
        
        if (!token) {
            console.log('Not logged in');
            return res.status(401).json('You need to login!');
        }

        let pkey = fs.readFileSync(path.join(__dirname, 'public.pem'));
        let payload = await jwt.verify(token, pkey);
        
        console.log('email : '+payload.email);
        console.log('name : '+payload.name);
        console.log('role : '+payload.role);
        console.log('cookie checked successfully');

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(payload);

        
    } catch (error) {
        return res.status(500).json(error.toString());
    }
    
}

exports.clear = async (req, res) => {

    try {
        res.clearCookie("AuthEbsToken");
        res.send('cookie cleared');
        console.log('cookie cleared successfully');

    } catch (error) {
        return res.status(500).json(error.toString());
    }
    
}