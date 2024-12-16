const express = require('express');
const app = express();

// Define a route for the root ("/") URL
app.get('/', (req, res) => {
  res.send('Hello, this is your app on Aptible!');
});

// Define a health check route
app.get('/health', (req, res) => {
  res.status(200).send('App is running');
});

// The port will be set by Aptible's environment
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

