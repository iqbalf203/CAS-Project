package com.ibm.springboot.cityManagement.service;

import com.ibm.springboot.cityManagement.model.Admin;
import com.ibm.springboot.cityManagement.Repository.AdminRepository;
import com.ibm.springboot.cityManagement.exception.AdminNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImp implements AdminService {

    private final Logger LOG = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public List<Admin> getAllAdmins() {
        List<Admin> admins = adminRepository.findAll();
        if (admins.isEmpty()) {
            String errorMessage = "No Admins found!";
            LOG.warn(errorMessage);
            throw new AdminNotFoundException(errorMessage);
        }
        LOG.info("Get All Admins Method Invoked");
        return admins;
    }

    @Override
    public Optional<Admin> getAdminById(String adminId) {
        Optional<Admin> admin = adminRepository.findById(adminId);
        if (admin.isEmpty()) {
            String errorMessage = "Admin with ID " + adminId + " not found";
            LOG.warn(errorMessage);
            throw new AdminNotFoundException(errorMessage);
        }
        LOG.info("Get Admin By ID Method Invoked");
        return admin;
    }

    @Override
    public Optional<Admin> getAdminByUsername(String username) {
        Optional<Admin> admin = adminRepository.findByUsername(username);
        if (admin.isEmpty()) {
            String errorMessage = "Admin with username " + username + " not found";
            LOG.warn(errorMessage);
            throw new AdminNotFoundException(errorMessage);
        }
        LOG.info("Get Admin By Username Method Invoked");
        return admin;
    }

    @Override
    public Admin registerAdmin(Admin adminData) {
        if (adminRepository.existsByUsername(adminData.getUsername())) {
            String errorMessage = "Admin with username " + adminData.getUsername() + " already exists";
            LOG.warn(errorMessage);
            throw new AdminNotFoundException(errorMessage);
        }
        LOG.info("Register Admin Method Invoked");
        return adminRepository.save(adminData);
    }

    @Override
    public Optional<Admin> loginAdmin(String username, String password) {
        Optional<Admin> admin = adminRepository.findByUsernameAndPassword(username, password);
        if (admin.isEmpty()) {
            String errorMessage = "Invalid username or password";
            LOG.warn(errorMessage);
            throw new AdminNotFoundException(errorMessage);
        }
        LOG.info("Login Admin Method Invoked");
        return admin;
    }

    @Override
    public Optional<Admin> updateAdminProfile(String adminId, Admin updatedData) {
        return adminRepository.findById(adminId)
                .map(admin -> {
                    if (updatedData.getName() != null) {
                        admin.setName(updatedData.getName());
                    }
                    if (updatedData.getEmail() != null) {
                        admin.setEmail(updatedData.getEmail());
                    }
                    if (updatedData.getPassword() != null) {
                        admin.setPassword(updatedData.getPassword());
                    }
                   if (updatedData.getPhone() != 0L) {
                    admin.setPhone(updatedData.getPhone());                   
                    }
                    LOG.info("Update Admin Profile Method Invoked");
                    return adminRepository.save(admin);
                });
    }

}
