//package com.ibm.springboot.cityManagement.Repository;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.boot.autoconfigure.mongo.MongoConnectionDetails;
//
//import com.ibm.springboot.cityManagement.model.Suggestion;
//
//public interface SuggestionRepository extends MongoConnectionDetails{
//
//	public abstract List<Suggestion> findAll();
//
//	public abstract Optional<Suggestion> findById(String suggestionId);
//
//	public abstract Optional<Suggestion> findByCreator(String creatorId);
//
//	public abstract Suggestion save(Suggestion suggestionData);
//
//}
