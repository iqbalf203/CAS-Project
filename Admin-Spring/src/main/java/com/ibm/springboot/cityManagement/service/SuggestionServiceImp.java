//package com.ibm.springboot.cityManagement.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.ibm.springboot.cityManagement.Repository.SuggestionRepository;
//import com.ibm.springboot.cityManagement.model.Suggestion;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class SuggestionServiceImp implements SuggestionService {
//
//    @Autowired
//    private SuggestionRepository suggestionRepository;
//
//    @Override
//    public List<Suggestion> getAllSuggestions() {
//        return suggestionRepository.findAll();
//    }
//
//    @Override
//    public Suggestion getSuggestionById(String suggestionId) {
//        Optional<Suggestion> suggestion = suggestionRepository.findById(suggestionId);
//        return suggestion.orElseThrow(() -> new RuntimeException("Failed to fetch suggestion by ID"));
//    }
//
//    @Override
//    public Suggestion getSuggestionByCreator(String creatorId) {
//        Optional<Suggestion> suggestion = suggestionRepository.findByCreator(creatorId);
//        return suggestion.orElseThrow(() -> new RuntimeException("Failed to fetch suggestion by creator ID"));
//    }
//
//    @Override
//    public Suggestion createSuggestion(Suggestion suggestionData) {
//        return suggestionRepository.save(suggestionData);
//    }
//
//    @Override
//    public Suggestion updateSuggestion(String suggestionId, Suggestion updatedData) {
//        Suggestion suggestion = getSuggestionById(suggestionId);
//        // Update the suggestion fields here
//        return suggestionRepository.save(suggestion);
//    }
//}
