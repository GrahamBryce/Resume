const express = require('express');
const cors = require('cors'); 
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

// Your routes
const emailRoutes = require('./routes/emailRoutes');
app.use('/api', emailRoutes);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require('express');
// const cors = require('cors'); // Import cors middleware

// const app = express();

// // Use CORS middleware
// app.use(cors());

// // Other middleware (e.g., body parsing)
// app.use(express.json());

// // Your routes
// const emailRoutes = require('./routes/emailRoutes');
// app.use('/api', emailRoutes);

// // Start the server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });