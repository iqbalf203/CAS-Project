//package com.ibm.springboot.cityManagement.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import com.ibm.springboot.cityManagement.model.Complaint;
//import com.ibm.springboot.cityManagement.service.ComplaintService;
//
//@RestController
//@RequestMapping("/complaints")
//public class ComplaintController {
//
//    @Autowired
//    private ComplaintService complaintService;
//
//    @GetMapping
//    public ResponseEntity<?> getAllComplaints() {
//        try {
//            return ResponseEntity.ok(complaintService.getAllComplaints());
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<?> getComplaintById(@PathVariable String id) {
//        try {
//            Complaint complaint = complaintService.getComplaintById(id);
//            return ResponseEntity.ok(complaint);
//        } catch (RuntimeException e) {
//            return ResponseEntity.status(404).body(e.getMessage());
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @GetMapping("/complaint-by-complaintId/{complaintId}")
//    public ResponseEntity<?> getComplaintByComplaintId(@PathVariable String complaintId) {
//        try {
//            Complaint complaint = complaintService.getComplaintByComplaintId(complaintId);
//            return ResponseEntity.ok(complaint);
//        } catch (RuntimeException e) {
//            return ResponseEntity.status(404).body(e.getMessage());
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//    
//
//    @GetMapping("/complaint-by-creatorId{creatorId}")
//    public ResponseEntity<?> getComplaintByCreatorId(@PathVariable String creatorId) {
//        try {
//            return ResponseEntity.ok(complaintService.getComplaintByCreatorId(creatorId));
//        } catch (RuntimeException e) {
//            return ResponseEntity.status(404).body(e.getMessage());
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @PostMapping
//    public ResponseEntity<?> createComplaint(@RequestBody Complaint complaint) {
//        try {
//            Complaint newComplaint = complaintService.createComplaint(complaint);
//            return ResponseEntity.status(201).body(newComplaint);
//        } catch (RuntimeException e) {
//            return ResponseEntity.status(400).body(e.getMessage());
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//
//    @PutMapping//("/{id}")
//    public ResponseEntity<?> updateComplaint(@PathVariable String id, @RequestBody Complaint updatedComplaint) {
//        try {
//            Complaint complaint = complaintService.updateComplaint(id, updatedComplaint);
//            return ResponseEntity.ok(complaint);
//        } catch (RuntimeException e) {
//            return ResponseEntity.status(404).body(e.getMessage());
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(e.getMessage());
//        }
//    }
//}
//
