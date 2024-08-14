package com.app.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class BookingDTO {
    private Long bookingId;
    private Date bookingDate;
    private Double totalCost;
    private String status;
    private Long userId;
    private Long pkgId;
    //private Long customPkgId;
}
