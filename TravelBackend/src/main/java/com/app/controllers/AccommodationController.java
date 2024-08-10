package com.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.AccommodationDTO;
import com.app.service.AccomodationService;

@RestController
@RequestMapping("/accommodations")
public class AccommodationController {

	@Autowired
	private AccomodationService accommodationService;

	@PostMapping
	public ResponseEntity<AccommodationDTO> createAccommodation(@RequestBody AccommodationDTO accommodationDTO) {
		AccommodationDTO createdAccommodation = accommodationService.createAccommodation(accommodationDTO);
		return ResponseEntity.ok(createdAccommodation);
	}

	@GetMapping("/{id}")
	public ResponseEntity<AccommodationDTO> getAccommodationById(@PathVariable Long id) {
		Optional<AccommodationDTO> accommodationDTO = accommodationService.getAccommodationById(id);
		return accommodationDTO.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}

	@GetMapping
	public ResponseEntity<List<AccommodationDTO>> getAllAccommodations() {
		List<AccommodationDTO> accommodations = accommodationService.getAllAccommodations();
		return ResponseEntity.ok(accommodations);
	}

	@GetMapping("/search")
	public ResponseEntity<List<AccommodationDTO>> findAccommodationsByDestinationId(@RequestParam Long destId) {
		List<AccommodationDTO> accommodations = accommodationService.findAccommodationsByDestinationId(destId);
		return ResponseEntity.ok(accommodations);
	}

	@GetMapping("/name")
	public ResponseEntity<AccommodationDTO> findAccommodationByName(@RequestParam String name) {
		Optional<AccommodationDTO> accommodationDTO = accommodationService.findAccommodationByName(name);
		return accommodationDTO.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}

	@PutMapping("/{id}")
	public ResponseEntity<AccommodationDTO> updateAccommodation(@PathVariable Long id,
			@RequestBody AccommodationDTO accommodationDTO) {
		AccommodationDTO updatedAccommodation = accommodationService.updateAccommodation(id, accommodationDTO);
		return ResponseEntity.ok(updatedAccommodation);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteAccommodation(@PathVariable Long id) {
		accommodationService.deleteAccommodation(id);
		return ResponseEntity.noContent().build();
	}
}
