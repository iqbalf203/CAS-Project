import axios from "axios";

const BASE_URL = process.env.REACT_APP_NODE_BASE_URL;

const EmployeeService = {

    getEmployees: async (token) =>{

        try {
            const resp = await axios.get(`${BASE_URL}/employees`,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }})
            return resp.data;

        } catch (error) {
            throw (error)
        }
    
    },
    updateEmployee: async (updateData,token)=>{

        try {
            console.log(updateData)
        const resp = await axios.put(`${BASE_URL}/user/${updateData._id}`,updateData,{
            headers: {
                'Authorization': `Bearer ${token}`
        }})

        return resp.data

        } catch (error) {

            throw new Error("Failed to Update")
        }
    },

    deleteEmployee: async (empId,token)=>{

        try {
                const resp = await axios.delete(`${BASE_URL}/employee/${empId}`,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                }})
                return resp

        } catch (error) {

            throw new Error("Failed to Delete");
        }
    },
    addEmployee: async (employee,token)=>{

        try {
                const resp = await axios.post(`${BASE_URL}/register`,employee,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                }})
                console.log(resp);
                return resp.data

        } catch (error) {
            console.log(error);
            throw new Error("Failed to add");
        }
    }
}

export default EmployeeService