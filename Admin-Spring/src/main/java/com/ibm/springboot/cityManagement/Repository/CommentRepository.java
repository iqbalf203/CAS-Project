//package com.ibm.springboot.cityManagement.Repository;
//import org.springframework.stereotype.Repository;
//import com.ibm.springboot.cityManagement.model.Comment;
//
//import java.util.Collection;
//import java.util.List;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//
//@Repository
//public interface CommentRepository extends MongoRepository<Comment,String> {
//
//	public abstract Comment save(Comment commentData);
//
//	public abstract List<Comment> findAll();
//
//	public abstract Object findByCommenterId(String commenterId);
//
//	public abstract Object findBySuggestionId(String suggestionId);
//
//	public abstract void deleteById(String commentId);
//
//}