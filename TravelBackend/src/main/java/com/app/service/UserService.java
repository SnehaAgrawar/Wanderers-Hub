package com.app.service;

import java.util.List;

import com.app.entities.User;

public interface UserService {

	User registerUser(User user);
	
	User updateUser(Long id,User userDetails);
	
	List<User> getAllUsers();
}
