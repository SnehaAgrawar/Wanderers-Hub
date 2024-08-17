package com.app.dto;
import java.sql.Date;

//
import lombok.Data;
//
//@Data
//public class BookingDTO {
//    private Long bookingId;
//    private Date bookingDate;
//    private Double totalCost;
//    private String status;
//    private Long userId;
//    private Long pkgId;
//    //private Long customPkgId;
//}

@Data
public class BookingDTO {
    private Long bookingId;
    private Long userId;
    private Long pkgId;
//    private Long customPkgId;  // Add this field if it doesn't exist
    private Date bookingDate;
    private Double totalCost;
    private String status;

    // Getters and setters

    public Long getBookingId() {
        return bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getPkgId() {
        return pkgId;
    }

    public void setPkgId(Long pkgId) {
        this.pkgId = pkgId;
    }

//    public Long getCustomPkgId() {  // Add this method
//        return customPkgId;
//    }
//
//    public void setCustomPkgId(Long customPkgId) {
//        this.customPkgId = customPkgId;
//    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

