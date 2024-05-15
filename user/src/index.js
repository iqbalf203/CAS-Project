 
import express from 'express';
import { registerUser, loginUser, updateUserProfile, getUserById, getAllUsers, getUserByUserName } from './controllers/user.controller.js';
import { createComplaint,getComplaintByCreatorId,getComplaintByComplaintId,updateComplaint, getAllComplaints } from './controllers/complaint.controller.js'
import { createSuggestion, getAllSuggestions, getSuggestionByCreator, getSuggestionById, updateSuggestion } from './controllers/suggestion.controller.js';
import {getAllComments, getCommentByCommenterId, getCommentBySuggestionId, createComment, deleteComment} from './controllers/comment.controller.js'


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
app.post('/get-pass',getUserByUserName)
app.post('/register', registerUser);
app.post('/login', loginUser);
app.put('/user/:id',isCitizenOrAdmin, updateUserProfile);


// Complaint requests
// ==============================================================
app.get('/complaints/:id',isAdmin, getAllComplaints)
app.get('/complaint-by-complaintId/:id',getComplaintByComplaintId)
app.get('/complaint-by-creatorId/:id', isCitizenOrAdmin,getComplaintByCreatorId)
app.post('/complaint', isCitizen, createComplaint)
app.put('/complaint',isAdmin,updateComplaint)


// Suggestion requests
// ==============================================================
app.get('/suggestions', getAllSuggestions);
app.get('/suggestion-by-id/:id', getSuggestionById);
app.get('/suggestion-by-creatorId/:id', isCitizenOrAdmin,getSuggestionByCreator);
app.post('/suggestion',isCitizen,createSuggestion);
app.put('/suggestion/:id',isAdmin, updateSuggestion);


// Comment requests
// ==============================================================
app.get('/comments', getAllComments);
app.get('/comments/commenter/:id', getCommentByCommenterId); 
app.get('/comments/suggestion/:id', getCommentBySuggestionId); 
app.post('/comment', createComment);
app.delete('/comment/:id', deleteComment);