package com.ibm.springboot.cityManagement.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ibm.springboot.cityManagement.model.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String> {

    public abstract boolean existsByUsername(String username);

    public abstract Admin save(Admin adminData);

    public abstract Optional<Admin> findByUsername(String username);

    public abstract List<Admin> findAll();

    public abstract Optional<Admin> findById(String adminId);

	public abstract Optional<Admin> findByUsernameAndPassword(String username, String password);

}

