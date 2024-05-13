import complaintService from "../services/complaint.service.js";

const getAllComplaints = async (req, res,) => {
    console.log('controller');
    try {
        const complaints = await complaintService.getAllComplaints();
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getComplaintById = async (req, res) => {
    console.log('controller');
    const id = req.params.id;
    try {
        const complaint = await complaintService.getComplaintById(id)
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        // req.complaint = complaint; // Attach complaint object to req
        res.status(200).json(complaint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getComplaintByComplaintId = async (req, res) => {
    console.log('controller');
    const complaintId = req.params.id;
    try {
        const complaint = await complaintService.getComplaintByComplaintId(complaintId)
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        // req.complaint = complaint; // Attach complaint object to req
        res.status(200).json(complaint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getComplaintByCreatorId = async (req, res) => {
    console.log('controller');
    const creatorId = req.params.id;
    try {
        const complaint = await complaintService.getComplaintByCreatorId(creatorId)
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        // req.complaint = complaint; // Attach complaint object to req
        res.status(200).json(complaint);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createComplaint = async (req, res) => {
    console.log('controller');
    console.log(req.body);
    try {
        const complaint = await complaintService.createComplaint(req.body);
        // sendEmail(complaint.email,'Welcome to City Administration System!', complaint)
        res.status(201).json(complaint);
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message });
    }
};


const updateComplaint = async (req, res) => {
    console.log('controller');
    console.log(req.body);
    console.log(req.params.id); 
    const id = req.params.id;
    const updatedData = req.body;
    try {
        const updatedComplaint = await complaintService.updateComplaint(id, updatedData);
        res.status(200).json(updatedComplaint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export {getAllComplaints, getComplaintById,getComplaintByComplaintId, getComplaintByCreatorId, createComplaint, updateComplaint}