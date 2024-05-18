//package com.ibm.springboot.cityManagement.Repository;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//
//import com.ibm.springboot.cityManagement.model.Complaint;
////import com.ibm.springboot.Complaint.model.Complaint;
//
//public interface ComplaintRepository extends MongoRepository {
//
//	public abstract List<Complaint> findAll();
//
//	public abstract List<Complaint> findByCreator(String creatorId);
//
//	public abstract Complaint save(Complaint complaintData);
//
//	public abstract Optional<Complaint> findById(String id);
//
//	public abstract Optional<Complaint> findByComplaintId(String complaintId);
//
//	public abstract boolean existsByComplaintId(Object complaintId);
//	
//}
