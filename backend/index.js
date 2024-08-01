const express = require("express");
// const morgan = require("morgan");
const cors = require("cors");
const app = express();
require('dotenv').config();

app.use(cors());

// Will keep this here
app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

module.exports = app;