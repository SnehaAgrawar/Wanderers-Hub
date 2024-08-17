package com.app.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.CascadeType;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;
    private Date bookingDate;
    private Double totalCost;
    private String status;

    @ManyToOne(cascade = CascadeType.ALL)  // Adding cascade type ALL
    @JoinColumn(name = "userId", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)  // Adding cascade type ALL
    @JoinColumn(name = "pkgId", nullable = false)
    private TourPackage tourPackage;

//    @ManyToOne(cascade = CascadeType.ALL)  // Uncomment if you want to use cascade for CustomPackage
//    @JoinColumn(name = "customPkgId", nullable = true)
//    private CustomPackage customPackage;
}
