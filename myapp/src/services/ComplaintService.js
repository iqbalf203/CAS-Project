import axios from "axios";

const BASE_URL = process.env.REACT_APP_NODE_BASE_URL;

const ComplaintService = {

    getAllComplaints: async(userId,token)=>{

        try {
            const resp = await axios.get(`${BASE_URL}/complaints/${userId}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }})
            return resp;
        } catch (error) {
            throw error
        }
    },

    getComplaintByComplaintId: async (complaintId,token) => {

        try {

            const resp = await axios.get(`${BASE_URL}/complaint-by-complaintId/${complaintId}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }})
            return resp;

        } catch (error) {

            throw error;

        }

    },

    getComplaintByCreatorId: async (creatorId,token) => {

        try {

            const resp = await axios.get(`${BASE_URL}/complaint-by-creatorId/${creatorId}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }})
            return resp;

        } catch (error) {

            throw error;

        }

    },

    createComplaint: async (complaintData,token) => {

        try {
            console.log(complaintData)

            const resp = await axios.post(`${BASE_URL}/complaint`, complaintData,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }})
            return resp;

        } catch (error) {

            throw error;

        }

    },

    updateComplaint: async (id,complaintData,token) => {

        try {

            const resp = await axios.put(`${BASE_URL}/complaint/${id}`, complaintData,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }})
            return resp;

        } catch (error) {

            throw error;

        }

    },

    respondToCitizen: async (data,token) => {
        try {
            const resp = await axios.post(`${BASE_URL}/sendMail`,data,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }})
            return resp
        } catch (error) {
            throw error
        }
    }

}

export default ComplaintService;