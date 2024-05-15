import axios from "axios";

const BASE_URL = 'http://localhost:3001';

const SuggestionService = {

        getAllSuggestions: async()=>{
            try {
                const resp = await axios.get(`${BASE_URL}/suggestions`)
                return resp
            } catch (error) {
                throw error
            }
        },

        getSuggestionById: async(suggestionId)=>{
            try {
                const resp = await axios.get(`${BASE_URL}/suggestion-by-id/${suggestionId}`)
                return resp
            } catch (error) {
                throw error
            }
        },

        getSuggestionByCreatorId: async(creatorId)=>{
            try {
                const resp = await axios.get(`${BASE_URL}/suggestion-by-id/${creatorId}`)
                return resp
            } catch (error) {
                throw error
            }
        },

        createSuggestion: async(suggestionData)=>{

            try {
                console.log(suggestionData)
                const resp = await axios.post(`${BASE_URL}/suggestion`,suggestionData)
                return resp
            } catch (error) {
                throw error
            }
        },

        updateSuggestion: async(suggestionId, updateData)=>{

            try {
                const resp = await axios.put(`${BASE_URL}/suggestion/${suggestionId}`,updateData)
                return resp
            } catch (error) {
                throw error
            }
        }



}

export default SuggestionService;