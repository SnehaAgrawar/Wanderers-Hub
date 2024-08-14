package com.app.dto;

import com.app.entities.UserType;
import lombok.Data;

@Data
public class UserDTO {
//    private Long userId;
    private String uname;
    private String contactNo;
    private UserType userType;
    private String address;
}
