// app.js
const express = require('express');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (like CSS, images)
app.use(express.static('public'));

// Home route to render index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
