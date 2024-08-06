package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.User;
import com.app.service.UserService;



@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	UserService userService;
	@PostMapping
	public User registerUser(@RequestBody User user)
	{
		return userService.registerUser(user);
	}

	@GetMapping
	public User getUser(@RequestParam Long uid) {
		return userService.getUser(uid);
	}
	

	@PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userService.updateUser(id,userDetails);
    }
	
	@GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
	
}
