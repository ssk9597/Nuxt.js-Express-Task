// dotenv
require('dotenv').config();
const PORT = process.env.API_PORT;

// express
const express = require('express');
const app = express();

// cors
const cors = require('cors');
app.use(cors());

// routing_file
const indexRouter = require('./routes/index');

// routing
app.use('/', indexRouter);

// start_the_server
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
