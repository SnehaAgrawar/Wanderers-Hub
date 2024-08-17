package com.app.service;

import com.app.dto.UserDTO;
import com.app.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    UserDTO createUser(UserDTO userDto);
    UserDTO updateUser(Long id, UserDTO userDto);
    UserDTO getUserById(Long id);
    void deleteUser(Long id);
    List<UserDTO> getAllUsers();
    Optional<User> login(String email, String password);
    UserDTO findByEmail(String email);
}
