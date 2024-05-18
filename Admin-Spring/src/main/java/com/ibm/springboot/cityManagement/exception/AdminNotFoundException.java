package com.ibm.springboot.cityManagement.exception;

public class AdminNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = -4373158775284035841L;

    public AdminNotFoundException(String message) {
        super(message);
    }
    public AdminNotFoundException() {
    	super();
    }
}
