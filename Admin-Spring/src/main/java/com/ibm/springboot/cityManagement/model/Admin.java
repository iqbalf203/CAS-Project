package com.ibm.springboot.cityManagement.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document("admin")
public class Admin {
	@Id
	private String id;
	private String name;
	private String username;
	private String email;
	private String password;
	private long phone;
	private String role;
	private Date registrationDate;
	
	public Admin(String id, String name, String username, String email, String password, long phone, String role,
			Date registrationDate) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.role = role;
		this.registrationDate = registrationDate;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Date getRegistrationDate() {
		return registrationDate;
	}
	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}
	@Override
	public String toString() {
		return "Admin [id=" + id + ", name=" + name + ", username=" + username + ", email=" + email + ", password="
				+ password + ", phone=" + phone + ", role=" + role + ", registrationDate=" + registrationDate + "]";
	}
	

	
}
