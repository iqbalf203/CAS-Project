import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
  name: {
    type: String, 
    required: true},
  username: { 
    type: String, 
    required: true },
  email: { 
    type: String, 
    required: true },
  password: { 
    type: String, 
    required: true },
  role: { 
    type: String, 
    enum: ['citizen', 'admin'], 
    required: true },
  registrationDate: 
  { type: Date, 
    default: Date.now }
});

const User = mongoose.model('User', userSchema);

export default User;