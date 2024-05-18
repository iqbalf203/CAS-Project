//package com.ibm.springboot.cityManagement.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import com.ibm.springboot.cityManagement.model.Suggestion;
//import com.ibm.springboot.cityManagement.service.SuggestionService;
//
//@RestController
//@RequestMapping("/suggestions")
//public class SuggestionController {
//
//    @Autowired
//    private SuggestionService suggestionService;
//
//    @GetMapping
//    public ResponseEntity<?> getAllSuggestions() {
//        try {
//            return ResponseEntity.ok(suggestionService.getAllSuggestions());
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @GetMapping("/suggestion-by-id/{id}")
//    public ResponseEntity<?> getSuggestionById(@PathVariable String id) {
//        try {
//            Suggestion suggestion = suggestionService.getSuggestionById(id);
//            if (suggestion == null) {
//                return ResponseEntity.status(404).body("Suggestion not found");
//            }
//            return ResponseEntity.ok(suggestion);
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @GetMapping("/suggestion-by-creatorId/{creatorId}")
//    public ResponseEntity<?> getSuggestionByCreator(@PathVariable String creatorId) {
//        try {
//            Suggestion suggestion = suggestionService.getSuggestionByCreator(creatorId);
//            if (suggestion == null) {
//                return ResponseEntity.status(404).body("Suggestion not found");
//            }
//            return ResponseEntity.ok(suggestion);
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @PostMapping
//    public ResponseEntity<?> createSuggestion(@RequestBody Suggestion suggestion) {
//        try {
//            Suggestion newSuggestion = suggestionService.createSuggestion(suggestion);
//            return ResponseEntity.status(201).body(newSuggestion);
//        } catch (Exception e) {
//            return ResponseEntity.status(400).body(e.getMessage());
//        }
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<?> updateSuggestion(@PathVariable String id, @RequestBody Suggestion updatedSuggestion) {
//        try {
//            Suggestion suggestion = suggestionService.updateSuggestion(id, updatedSuggestion);
//            if (suggestion == null) {
//                return ResponseEntity.status(404).body("Suggestion not found");
//            }
//            return ResponseEntity.ok(suggestion);
//        } catch (Exception e) {
//            return ResponseEntity.status(400).body(e.getMessage());
//        }
//    }
//}
