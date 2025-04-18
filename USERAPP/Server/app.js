const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./Config/db.js');
const userRoutes = require('./Routes/userRoutes.js');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // To parse JSON bodies
dbConnect();

// Routes
app.use('/api', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
