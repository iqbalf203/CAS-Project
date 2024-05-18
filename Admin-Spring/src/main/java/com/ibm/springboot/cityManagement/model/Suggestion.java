package com.ibm.springboot.cityManagement.model;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
//import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;


public class Suggestion {

//    @Id
    private String id;

    
    private String title;

  
    private String description;

   
    private SuggestionStatus status = SuggestionStatus.PENDING;

   
    private User creator;

  
    private Date creationDate = new Date();

    private Date lastUpdatedDate = new Date();
//
//        name = "suggestion_votes",
//        joinColumns = (name = "suggestion_id"),
//        inverseJoinColumns = (name = "user_id");
    
    private List<User> votes;

    // Getters and Setters

    // Enum for suggestion status
    public enum SuggestionStatus {
        PENDING, APPROVED, REJECTED;
    }
}

