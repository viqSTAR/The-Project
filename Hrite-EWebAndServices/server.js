const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
// app.get('/about', (req, res) => res.sendFile(__dirname + '/public/about.html'));
// app.get('/contact', (req, res) => res.sendFile(__dirname + '/public/contact.html'));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
