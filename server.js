const express = require('express');
const dotenv = require('dotenv');

// LOAD ENV VARIABLES
dotenv.config({ path: './config/config.env' });

// INITIALIZE APP VARIABLE WITH EXPRESS
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
