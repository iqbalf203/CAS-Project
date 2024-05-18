package com.ibm.springboot.cityManagement.controller;
import com.ibm.springboot.cityManagement.model.Admin;	
import com.ibm.springboot.cityManagement.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/all") 
    public ResponseEntity<List<Admin>> getAllAdmins() {
        List<Admin> admins = adminService.getAllAdmins();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

    @GetMapping("/{adminId}") 
    public ResponseEntity<Optional<Admin>> getAdminById(@PathVariable String adminId) {
        Optional<Admin> admin = adminService.getAdminById(adminId);
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }

    @PostMapping("/register") 
    public ResponseEntity<Admin> registerAdmin(@RequestBody Admin adminData) {
        Admin registeredAdmin = adminService.registerAdmin(adminData);
        return new ResponseEntity<>(registeredAdmin, HttpStatus.CREATED);
    }
    
    @PostMapping("/login") 
    public ResponseEntity<Optional<Admin>> loginAdmin(@RequestBody Admin credentials) {
    	System.out.println(credentials);
        Optional<Admin> admin = adminService.loginAdmin(credentials.getUsername(), credentials.getPassword());
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }

    @PutMapping("/{adminId}") 
    public ResponseEntity<Optional<Admin>> updateAdminProfile(@PathVariable String adminId, @RequestBody Admin updatedData) {
        Optional<Admin> updatedAdmin = adminService.updateAdminProfile(adminId, updatedData);
        return new ResponseEntity<>(updatedAdmin, HttpStatus.OK);
    }
}

