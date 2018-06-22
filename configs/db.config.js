const mongoose = require('mongoose');
const DB_NAME = 'lab-mongoose-recipes';
const MONGO_URI = `mongodb://localhost/${DB_NAME}`;

mongoose.connect(MONGO_URI);
mongoose.connection.on('connected', (error) => {
    console.log('Connected to the database:', MONGO_URI);
});
mongoose.connection.on('error', (error) => {
    console.log('Database connection error:', error);
});