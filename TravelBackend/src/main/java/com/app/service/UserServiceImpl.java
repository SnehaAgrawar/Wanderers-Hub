package com.app.service;

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
	public User getUser(Long uid) {
		User user = userRepository.findById(uid).orElseThrow(()-> 
			new ResponseStatusException(HttpStatus.NOT_FOUND,"invalid id"));
		return user;
	}

}
