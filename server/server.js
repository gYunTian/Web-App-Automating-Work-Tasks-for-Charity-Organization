// app.js - main app
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const server = express();
require('dotenv').config();

let appEnv = require('cfenv').getAppEnv();
let mongoConnect = require('./db/mongo-connect.js');

// Import routes
const authRouter = require('./routes/authRoute');
const loginRouter = require('./routes/loginRoute');
const registerRouter = require('./routes/registerRoute');

// env var
var path = process.env.MONGO_URI;

try {
    // connect mongo
    mongoConnect(appEnv);
    
} catch (error) {
  console.log('Error connecting to mongoDB');
  console.log(error);
  
}

// Use utils
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Use Cors
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

// Use routes
server.use('/api', authRouter);
server.use('/api',loginRouter);
server.use('/api',registerRouter);

const PORT = 5000;
server.listen(PORT, () => console.log('server started on port '+PORT));