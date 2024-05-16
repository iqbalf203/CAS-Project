import Comment from '../models/comment.model.js';

// Create a comment
const createComment = async (commentData) => {
  const newComment = new Comment(commentData);
  try {
    const savedComment = await newComment.save();
    return savedComment;
  } catch (err) {
    throw new Error(`Error creating comment: ${err.message}`);
  }
};

// Get all comments
const getAllComments = async () => {
  try {
    const comments = await Comment.find().populate('creator').populate('suggestion');
    return comments;
  } catch (err) {
    throw new Error(`Error fetching comments: ${err.message}`);
  } 
};

// Get a specific comment by ID
const getCommentByCreatorId = async (creatorId) => {
  try {
      const comment = await Comment.findOne({creator: creatorId})
      return comment;
  } catch (error) {
      throw new Error('Failed to fetch commenter by commenter ID');
  }
};

const getCommentBySuggestionId = async (suggestionId) => {
  try {
    console.log(suggestionId)
      const suggestion = await Comment.find({suggestion: suggestionId}).populate('creator', 'name')
      return suggestion;
  } catch (error) {
      throw new Error('Failed to fetch suggestion by suggestion ID');
  }
};

// Delete a comment by ID
const deleteComment = async (commentId) => {
  try {
    await Comment.findByIdAndDelete(commentId);
  } catch (err) {
    throw new Error(`Error deleting comment with ID ${commentId}: ${err.message}`);
  }
};

const commentService =  {
  createComment,
  getAllComments,
  getCommentByCreatorId,
  getCommentBySuggestionId,
  deleteComment,
};

export default commentService;