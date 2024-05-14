import mongoose from "mongoose";

const complaintTypes = ['Noise', 'Road Maintenance', 'Waste Management', 'Public Safety', 'Infrastructure', 'Environmental', 'Building Code', 'Traffic'];


// const generateRandomId = () => {
   
//     return Math.random().toString(36).substring(2, 10);
//   };

const complaintSchema = new mongoose.Schema({
    complaintId:{
        type: String,
        required: true,
        unique: true
    },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['open', 'in progress', 'resolved', 'dismissed'], 
    default: 'open'
  },
  
  address: {
    addressLine1: {
      type: String
    },
    state: {
      type: String
    },
    city: {
      type: String
    },
    pincode: {
      type: String
    }
  },

  complaintType: { 
    type: String, 
    enum: complaintTypes,
    required: true 
  },

  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  creationDate: { type: Date, default: Date.now },
  lastUpdatedDate: { type: Date, default: Date.now }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;