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
public class Itinerary {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long itineraryId;
	private Integer day;
	private String desc;
	private String location;

	@ManyToOne
	@JoinColumn(name = "pkgId", nullable = false)
	private TourPackage tourPackage;

}
