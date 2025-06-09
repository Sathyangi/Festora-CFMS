// server.js
const express = require('express');
const app = express();
const port = 5001; // Ensure this port is different from your Laravel server (typically 8000)

app.get('/', (req, res) => {
  res.send('Hello from Festora Node.js Service!');
});

app.listen(port, () => {
  console.log(`Festora Node.js Service listening at http://localhost:${port}`);
});