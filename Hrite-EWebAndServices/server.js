const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files in the 'public' folder
app.use(express.static('public'));

// If you want to handle specific routes explicitly:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'contact.html'));
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
