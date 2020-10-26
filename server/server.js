// app.js - main app
// refactor

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const server = express();
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();
const specs = require('./swagger');

let appEnv = require('cfenv').getAppEnv();
let mongoConnect = require('./db/mongo-connect.js');

// Import route
const apiRouter = require('./routes/apiRoute');

// env var
var path = process.env.MONGO_URI;

try {
    // connect mongo
    console.log('Connecting to mongo')
    mongoConnect(appEnv);
    
} catch (error) {
  console.log('Error connecting to mongoDB');
  console.log(error);
  
}

// Use utils
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

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
server.use('/api', apiRouter);

const PORT = 5000;
server.listen(PORT, () => console.log('server started on port '+PORT));