const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable CORS for your frontend
app.use(cors({
  origin: 'https://brycesresume-46f715e21449.herokuapp.com' // Your frontend's origin
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api', require('./routes/emailRoutes')); 

// The "catchall" handler: for any request that doesn't match an API route, send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







// this worked
// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();

// // Enable CORS for your frontend
// app.use(cors({
//   origin: 'https://brycesresume-46f715e21449.herokuapp.com' // Your frontend's origin
// }));

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../frontend/build')));

// // Your API routes here
// app.use('/api', require('./routes/apiRoutes')); // Example API route

// // The "catchall" handler: for any request that doesn't match an API route, send back React's index.html file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






// const express = require('express');
// const cors = require('cors'); 
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Your routes
// const emailRoutes = require('./routes/emailRoutes');
// app.use('/api', emailRoutes);

// // Start the server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
