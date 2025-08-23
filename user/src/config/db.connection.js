import mongoose from 'mongoose';

// const connectionString = 'mongodb://localhost:27017';
const connectionString = process.env.CAS_MONGO_URL;

mongoose.connect(connectionString)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));