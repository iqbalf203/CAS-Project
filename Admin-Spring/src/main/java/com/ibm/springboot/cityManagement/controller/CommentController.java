//package com.ibm.springboot.cityManagement.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import com.ibm.springboot.cityManagement.model.Comment;
//import com.ibm.springboot.cityManagement.service.CommentService;
//
//@RestController
//@RequestMapping("/comments")
//public class CommentController {
//
//    @Autowired
//    private CommentService commentService;
//
//    @GetMapping("/comments")
//    public ResponseEntity<?> getAllComments() {
//        try {
//            return ResponseEntity.ok(commentService.getAllComments());
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @GetMapping("/commenter/{commenterId}")
//    public ResponseEntity<?> getCommentByCommenterId(@PathVariable String commenterId) {
//        try {
//            return ResponseEntity.ok(commentService.getCommentByCommenterId(commenterId));
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @GetMapping("/suggestion/{suggestionId}")
//    public ResponseEntity<?> getCommentBySuggestionId(@PathVariable String suggestionId) {
//        try {
//            return ResponseEntity.ok(commentService.getSuggestionBySuggestionId(suggestionId));
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @PostMapping("/comments")
//    public ResponseEntity<?> createComment(@RequestBody Comment comment) {
//        try {
//            return ResponseEntity.status(201).body(commentService.createComment(comment));
//        } catch (Exception e) {
//            return ResponseEntity.status(400).body(e.getMessage());
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteComment(@PathVariable String id) {
//        try {
//            commentService.deleteComment(id);
//            return ResponseEntity.status(204).build();
//        } catch (Exception e) {
//            return ResponseEntity.status(400).body(e.getMessage());
//        }
//    }
//}

