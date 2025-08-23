import axios from "axios";

const BASE_URL = process.env.REACT_APP_NODE_BASE_URL;

const SuggestionService = {

        getAllSuggestions: async(token)=>{
            try {
                const resp = await axios.get(`${BASE_URL}/suggestions`,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                }})
                return resp
            } catch (error) {
                throw error
            }
        },

        getSuggestionById: async(suggestionId,token)=>{
            try {
                const resp = await axios.get(`${BASE_URL}/suggestion-by-id/${suggestionId}`,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                }})
                return resp
            } catch (error) {
                throw error
            }
        },

        getSuggestionByCreatorId: async(creatorId,token)=>{
            try {
                const resp = await axios.get(`${BASE_URL}/suggestion-by-creatorid/${creatorId}`,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                }})
                return resp
            } catch (error) {
                throw error
            }
        },

        createSuggestion: async(suggestionData,token)=>{

            try {
                console.log(suggestionData)
                const resp = await axios.post(`${BASE_URL}/suggestion`,suggestionData,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                }})
                return resp
            } catch (error) {
                throw error
            }
        },

        updateSuggestion: async(suggestionId, updateData,token)=>{

            try {
                const resp = await axios.put(`${BASE_URL}/suggestion/${suggestionId}`,updateData,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                }})
                return resp
            } catch (error) {
                throw error
            }
        },

        upvoteSuggestion: async(suggestionId, creatorId,token)=>{

            try {
                console.log(suggestionId,creatorId)
                const resp = await axios.put(`${BASE_URL}/suggestion-upvote/${suggestionId}`,{creator: creatorId},{
                    headers: {
                        'Authorization': `Bearer ${token}`
                }})
                return resp
            } catch (error) {
                throw error
            }
        } 



}

export default SuggestionService;