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

import com.app.dto.DestinationDTO;
import com.app.entities.Destination;
import com.app.service.DestinationService;

@RestController
@RequestMapping("/destination")
public class DestinationController {

	@Autowired
	public DestinationService destinationService;

	@GetMapping
	public List<Destination> getDestinations() {
		return destinationService.getDestination();
	}

	@PostMapping
	public Destination addestination(@RequestBody Destination destination) {
		return destinationService.adddestination(destination);
	}

	@PutMapping("/{id}")
	public Destination updateDestination(@PathVariable Long id, @RequestBody Destination destination) {
		return destinationService.updateDestinatin(id, destination);
	}

	@DeleteMapping("/{id}")
	public String deleteDestination(@PathVariable Long id) {
		return destinationService.deleteDestination(id);
	}

	@GetMapping("/search")
	public ResponseEntity<DestinationDTO> findDestinationByName(@RequestParam String destName) {
		Optional<DestinationDTO> destinationDTO = destinationService.findDestinationByName(destName);
		return destinationDTO.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}

}
