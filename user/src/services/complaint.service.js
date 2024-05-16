import Complaint from "../models/complaint.model.js";


const getAllComplaints = async () => {
    console.log('complaint service')
    try {
        const complaints = await Complaint.find().populate('creator','name')
        return complaints;
    } catch (error) {
        throw new Error('Failed to fetch complaints');
    }
};

const getComplaintById = async (id) => {
    try {
        const complaint = await Complaint.findById(id);
        return complaint;
    } catch (error) {
        throw new Error('Failed to fetch complaint by ID');
    }
};

const getComplaintByComplaintId = async (complaintId) => {
    try {
        const complaint = await Complaint.findOne({complaintId: complaintId}).populate('creator','name')
        console.log(complaint)
        return complaint;
    } catch (error) {
        throw new Error('Failed to fetch complaint by complaint ID');
    }
};

const getComplaintByCreatorId = async (creatorId) => {
    try {
        const complaint = await Complaint.find({creator: creatorId})
        return complaint;
    } catch (error) {
        throw new Error('Failed to fetch complaint by creator ID');
    }
};

const createComplaint = async (complaintData) => {
    try {
        const complaint = new Complaint(complaintData);
        const complaintId = Math.random().toString(36).substring(2, 10);
        complaint.complaintId = complaintId
        await complaint.save();
        return complaint;
    } catch (error) {
        if (error.message.includes('duplicate key')) {
            throw new Error(`COMPLAINT_ALREADY_EXIST: COMPLAINT with ${complaintData.complaintId} already exist!`);
        } else {
            throw new Error('Registration failed. Please try again.');
        }
    }
};


const updateComplaint = async (id, updatedData) => {
    try {
        const complaint = await Complaint.findByIdAndUpdate(id, updatedData, { new: true });
        if (!complaint) {
            throw new Error('Complaint not found');
        }
        return complaint;
    } catch (error) {
        throw new Error('Failed to update complaint');
    }
};

const complaintService =  {getAllComplaints, getComplaintById,getComplaintByComplaintId, getComplaintByCreatorId, createComplaint,updateComplaint}
export default complaintService;