const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
require('dotenv').config();
const app = require("./index")

// Use environment variable for the port, or default to 3000
const port = process.env.PORT || 3000;

// Will move this to server.js
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});