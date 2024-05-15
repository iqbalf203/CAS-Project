import axios from "axios";

const BASE_URL = 'http://localhost:3001';

const CommentService = {
    getAllComments: async () => {
        try {
            const resp = await axios.get(`${BASE_URL}/comments`);
            return resp.data;
        } catch (error) {
            throw error;
        }
    },

    getCommentsByCommenterId: async (commenterId) => {
        try {
            const resp = await axios.get(`${BASE_URL}/comments/commenter/${commenterId}`);
            return resp.data;
        } catch (error) {
            throw error;
        }
    },

    getCommentsBySuggestionId: async (suggestionId) => {
        try {
            const resp = await axios.get(`${BASE_URL}/comments/suggestion/${suggestionId}`);
            return resp.data;
        } catch (error) {
            throw error;
        }
    },

    createComment: async (commentData) => {
        try {
            const resp = await axios.post(`${BASE_URL}/comment`, commentData);
            return resp.data;
        } catch (error) {
            throw error;
        }
    },

    deleteComment: async (commentId) => {
        try {
            const resp = await axios.delete(`${BASE_URL}/comment/${commentId}`);
            return resp.data;
        } catch (error) {
            throw error;
        }
    }
};

export default CommentService;
