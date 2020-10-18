// app.js - main app
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const server = express();
server.use(cookieParser());

const authRouter = require('./routes/authRoute');

server.use(cookieParser());
server.use(
    '/api', 
    authRouter
);


server.use(
    cors({
      origin: [
        `${process.env.FRONT_URL}`,
        'http://localhost:3000',
        'https://mypage.com',
      ],
      credentials: true
    })
);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('server started on port '+PORT));