package com.ibm.springboot.cityManagement.service;

import java.util.List;
import java.util.Optional;

import com.ibm.springboot.cityManagement.model.Admin;

public interface AdminService {
    List<Admin> getAllAdmins();
    Optional<Admin> getAdminById(String adminId);
    Optional<Admin> getAdminByUsername(String username);
    Admin registerAdmin(Admin adminData);
    Optional<Admin> loginAdmin(String username, String password);
    Optional<Admin> updateAdminProfile(String adminId, Admin updatedData);
}



    

