import axios from "axios";

const BASE_URL = 'http://localhost:3001';

const UserService = {

    getCitizens: async (userId)=>{

        try {
            const resp = await axios.get(`${BASE_URL}/users/${userId}`)
            return resp;
        } catch (error) {
            throw error;
        }

    },

    login: async (credentials) => {

        try {

            const resp = await axios.post(`${BASE_URL}/login`, credentials)
            return resp;

        } catch (error) {

            throw error;

        }

    },

    getUser: async (userId, token) => {
        try {
            const resp = await axios.get(`${BASE_URL}/user/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return resp.data;
        } catch (error) {
            throw (error)
        }

    },

    forgotPassword: async (username) => {
        try {

            const resp = await axios.post(`${BASE_URL}/get-pass`, username)

            return resp

        } catch (error) {

            throw (error)
        }
    },

    registerUser: async (newUser) => {
        try {
            const resp = await axios.post(`${BASE_URL}/register`, newUser)

            return resp.data

        } catch (error) {

            throw (error)
        }
    },

    updateUser: async (userId, token, updateData) => {
        try {
            const resp = await axios.put(`${BASE_URL}/user/${userId}`, updateData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }, Body: updateData
            })

            return resp.data

        } catch (error) {

            throw (error)
        }
    },

    dataCount: async ()=>{
        try {
            const resp = await axios.get(`${BASE_URL}/all-data`)
            return resp.data
        } catch (error) {
            throw (error)
        }
    }

}

export default UserService;