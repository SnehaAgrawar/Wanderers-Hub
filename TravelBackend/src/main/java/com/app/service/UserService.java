package com.app.service;

import com.app.dto.UserDTO;
import java.util.List;

public interface UserService {
    UserDTO createUser(UserDTO userDto);
    UserDTO updateUser(Long id, UserDTO userDto);
    UserDTO getUserById(Long id);
    void deleteUser(Long id);
    List<UserDTO> getAllUsers();
}
