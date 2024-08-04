package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class TourPackage {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pkgId;
    private String pname;
    private String description;
    private Double price;
    private Integer duration;
    private LocalDate startDate;

}
