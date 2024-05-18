//package com.ibm.springboot.cityManagement.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.ibm.springboot.cityManagement.Repository.CommentRepository;
//import com.ibm.springboot.cityManagement.Repository.SuggestionRepository;
//import com.ibm.springboot.cityManagement.model.Comment;
//
//import java.util.List;
//import java.util.Optional;
//import java.util.stream.Collectors;
//
//@Service
//public class CommentServiceImpl implements CommentService {
//
//    @Autowired
//    private CommentRepository commentRepository;
//    private SuggestionRepository suggestionRepository;
//
//    @Override
//    public Comment createComment(Comment commentData) {
//        return commentRepository.save(commentData);
//    }
//
//    @Override
//    public List<Comment> getAllComments() {
//        return commentRepository.findAll().stream()
//                .peek(comment -> {
//                    comment.setCommenter(userRepository.findById(comment.getCommenter().getId()).orElse(null));
//                    comment.setSuggestion(suggestionRepository.findById(comment.getSuggestion().getId()).orElse(null));
//                })
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public Comment getCommentByCommenterId(String commenterId) {
//        return commentRepository.findByCommenterId(commenterId)
//                .orElseThrow(() -> new RuntimeException("Failed to fetch commenter by commenter ID"));
//    }
//
//    @Override
//    public Comment getSuggestionBySuggestionId(String suggestionId) {
//        return commentRepository.findBySuggestionId(suggestionId)
//                .orElseThrow(() -> new RuntimeException("Failed to fetch suggestion by suggestion ID"));
//    }
//
//    @Override
//    public void deleteComment(String commentId) {
//        commentRepository.deleteById(commentId);
//    }
//}
//
