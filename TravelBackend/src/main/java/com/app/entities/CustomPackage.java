package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class CustomPackage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long customPkgId;

	@ManyToOne
	@JoinColumn(name = "destId", nullable = false)
	private Destination destination;

}
