

import Suggestion from "../models/suggestion.model.js";


const getAllSuggestions = async () => {
    console.log('suggestion service');
    try {
        const suggestions = await Suggestion.find()
        return suggestions;
    } catch (error) {
        throw new Error('Failed to fetch citizen suggestions');
    }
};

const getSuggestionById = async (suggestionId) => {
    console.log('suggestion service');
    console.log(suggestionId);
    try {
        const suggestion = await Suggestion.findById(suggestionId);
        return suggestion;
    } catch (error) {
        throw new Error('Failed to fetch suggestion by ID');
    }
};

const getSuggestionByCreator = async (creatorId) => {
    console.log('suggestion service');
    console.log(creatorId);
    try {
        const suggestion = await Suggestion.findOne({creator:creatorId});
        return suggestion;
    } catch (error) {
        throw new Error('Failed to fetch suggestion by ID');
    }
};

const createSuggestion = async (suggestionData) => {
    console.log('suggestion service');
    console.log(suggestionData);
    try {
        const suggestion = new Suggestion(suggestionData);
        await suggestion.save();
        return suggestion;
    } catch (error) {
            throw new Error('Suggestion entry failed. Please try again.');
        }
};



const updateSuggestion = async (suggestionId, updatedData) => {
    console.log('suggestion service');
    console.log(updatedData);
    console.log(suggestionId);
    try {
        const updatedSuggestion = await Suggestion.findByIdAndUpdate(suggestionId, updatedData, { new: true });
        if (!updateSuggestion) {
            throw new Error('Suggestion not found');
        }
        return updateSuggestion;
    } catch (error) {
        throw new Error('Failed to update suggestion');
    }
};

const suggestionService = {getAllSuggestions,getSuggestionById, getSuggestionByCreator,createSuggestion, updateSuggestion };

export default suggestionService;