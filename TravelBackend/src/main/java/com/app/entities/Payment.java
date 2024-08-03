package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Payment {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;
    private String paymentMethod;
    private Double amount;
    private LocalDate date;
    private String status;

}
