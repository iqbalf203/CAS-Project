import axios from "axios";

const BASE_URL = process.env.REACT_APP_NODE_BASE_URL;

const CommentService = {
    getAllComments: async (token) => {
        try {
            const resp = await axios.get(`${BASE_URL}/comments`,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }});
            return resp.data;
        } catch (error) {
            throw error;
        }
    },

    getCommentsByCommenterId: async (commenterId,token) => {
        try {
            const resp = await axios.get(`${BASE_URL}/comments/commenter/${commenterId}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }});
            return resp.data;
        } catch (error) {
            throw error;
        }
    },

    getCommentsBySuggestionId: async (suggestionId,token) => {
        try {
            const resp = await axios.get(`${BASE_URL}/comments/suggestion/${suggestionId}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }});
            return resp.data;
        } catch (error) {
            throw error;
        }
    },

    createComment: async (commentData,token) => {
        try {
            const resp = await axios.post(`${BASE_URL}/comment`, commentData,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }});
            return resp.data;
        } catch (error) {
            throw error;
        }
    },

    deleteComment: async (commentId,token) => {
        try {
            const resp = await axios.delete(`${BASE_URL}/comment/${commentId}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
            }});
            return resp.data;
        } catch (error) {
            throw error;
        }
    }
};

export default CommentService;
