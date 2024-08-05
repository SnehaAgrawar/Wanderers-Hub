package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.app.entities.User;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	@Override

	public User registerUser(User user) {
		userRepository.save(user);
		return user;
	}
	@Override
    public User updateUser(Long id,User userDetails) {
        User user = userRepository.findById(id).orElseThrow();
        user.setUname(userDetails.getUname());
        user.setPassword(userDetails.getPassword());
        user.setContactNo(userDetails.getContactNo());
        user.setUserType(userDetails.getUserType());
        user.setAddress(userDetails.getAddress());
        return userRepository.save(user);
    }
	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUser(Long uid) {
		User user = userRepository.findById(uid).orElseThrow(()-> 
			new ResponseStatusException(HttpStatus.NOT_FOUND,"invalid id"));
		return user;
	}

}
