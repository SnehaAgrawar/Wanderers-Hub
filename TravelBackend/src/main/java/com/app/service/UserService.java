package com.app.service;

<<<<<<< HEAD
=======

>>>>>>> 858d20e8f28421503183eac393a73840fbd5f8d7
import java.util.List;

import com.app.entities.User;

public interface UserService {


	User registerUser(User user);
	
	User updateUser(Long id,User userDetails);
	
	List<User> getAllUsers();
<<<<<<< HEAD

=======
>>>>>>> 858d20e8f28421503183eac393a73840fbd5f8d7
	User getUser(Long uid);

}
