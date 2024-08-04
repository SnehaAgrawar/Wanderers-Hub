package com.app.service;

<<<<<<< HEAD
import java.util.List;

=======
>>>>>>> 7e25a3484827d3d194822642b9b10d7efdbd0f05
import com.app.entities.User;

public interface UserService {

<<<<<<< HEAD
	User registerUser(User user);
	
	User updateUser(Long id,User userDetails);
	
	List<User> getAllUsers();
=======
	User getUser(Long uid);
>>>>>>> 7e25a3484827d3d194822642b9b10d7efdbd0f05
}
