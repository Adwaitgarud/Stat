// Import packges
const express = require('express');
const path = require('path');

// create app instance
const app = express();

// set static folder
app.use(express.static(path.join(__dirname, 'docs')))


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log('Server started on port ${port}'));