//package com.ibm.springboot.cityManagement.service;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.ibm.springboot.cityManagement.Repository.ComplaintRepository;
//import com.ibm.springboot.cityManagement.model.Complaint;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//
//public class ComplaintServiceImp implements ComplaintService {
//	@Autowired
//    private ComplaintRepository complaintRepository;
//
//    public List<Complaint> getAllComplaints() {
//        return complaintRepository.findAll();
//    }
//
//    @Override
//    public Complaint getComplaintById(String id) {
//        Optional<Complaint> complaint = complaintRepository.findById(id);
//        return complaint.orElseThrow(() -> new RuntimeException("Failed to fetch complaint by ID"));
//    }
//
//    @Override
//    public Complaint getComplaintByComplaintId(String complaintId) {
//        Optional<Complaint> complaint = complaintRepository.findByComplaintId(complaintId);
//        return complaint.orElseThrow(() -> new RuntimeException("Failed to fetch complaint by complaint ID"));
//    }
//
//    @Override
//    public List<Complaint> getComplaintByCreatorId(String creatorId) {
//        return complaintRepository.findByCreator(creatorId);
//    }
//
//    @Override
//    public Complaint createComplaint(Complaint complaintData) {
//        if (complaintRepository.existsByComplaintId(complaintData.getComplaintId())) {
//            throw new RuntimeException("COMPLAINT_ALREADY_EXIST: COMPLAINT with " + complaintData.getComplaintId() + " already exist!");
//        }
//        return complaintRepository.save(complaintData);
//    }
//
//    @Override
//    public Complaint updateComplaint(String id, Complaint updatedData) {
//        Complaint complaint = getComplaintById(id);
//        // Update the complaint fields here
//        return complaintRepository.save(complaint);
//    }
//
//}
