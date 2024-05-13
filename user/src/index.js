// FAISAL 

import express from 'express';
import { registerUser, loginUser, updateUserProfile, getUserById, getAllUsers } from './controllers/user.controller.js';
import { createComplaint,getComplaintByCreatorId,getComplaintByComplaintId,updateComplaint } from './controllers/complaint.controller.js'
import './config/db.connection.js';
import cors from 'cors';
import { isAdmin, isCitizen, isCitizenOrAdmin } from './middleware/middleware.js';
import { authenticateJWT } from './services/auth.service.js';

const app = express();
app.use(cors()); 
app.use(express.json());
// app.use(authenticateJWT); 

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// User requests
// ==============================================================
app.get('/users/:id', isAdmin, getAllUsers)
app.get('/user/:id', isCitizenOrAdmin, getUserById)
app.post('/register', registerUser);
app.post('/login', loginUser);
app.put('/user/:id',isCitizenOrAdmin, updateUserProfile);


// Complaint requests
// ==============================================================
app.get('/complaint-by-complaintId/:id',getComplaintByComplaintId)
app.get('/complaint-by-creatorId/:id', isCitizenOrAdmin,getComplaintByCreatorId)
app.post('/complaint', isCitizen, createComplaint)
app.put('/complaint',isAdmin,updateComplaint)
