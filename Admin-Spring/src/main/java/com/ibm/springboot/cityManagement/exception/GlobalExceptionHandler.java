package com.ibm.springboot.cityManagement.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import com.ibm.springboot.cityManagement.model.Admin;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AdminNotFoundException.class)
    public ResponseEntity<Object> handleAdminNotFoundException(AdminNotFoundException ex, WebRequest request) {
        return handleExceptionInternal(ex, "Admin not found", new HttpHeaders(), HttpStatus.NOT_FOUND, request);
    }

    private ResponseEntity<Object> handleExceptionInternal(Exception ex, String bodyOfResponse, 
                                                       HttpHeaders headers, HttpStatus status, WebRequest request) {
        return new ResponseEntity<>(bodyOfResponse, headers, status);
    }
}
