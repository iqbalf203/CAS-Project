import express from 'express';
import { registerUser, loginUser, updateUserProfile, getUserById, getAllUsers } from './controllers/user.controller.js';
import './config/db.connection.js';
import cors from 'cors';
import { isAdmin, isCitizen, isCitizenOrAdmin } from './middleware/middleware.js';
import { authenticateJWT } from './services/auth.service.js';

const app = express();
app.use(cors()); // needed to avoid CORS errors in frontend app 
app.use(express.json());
app.use(authenticateJWT); // uncomment to use authentication and authorization

const PORT = process.env.PORT || 2000; // set PORT=2002 && npm start

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/users/:id', isAdmin, getAllUsers)
app.get('/user/:id', isCitizenOrAdmin, getUserById)
app.post('/register', registerUser);
app.post('/login', loginUser);
app.put('/user/:id',isAdmin, updateUserProfile);