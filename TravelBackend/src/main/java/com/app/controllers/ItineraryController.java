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
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ItineraryDTO;
import com.app.service.ItinerarySecvice;

@RestController
@RequestMapping("/api/itineraries")
public class ItineraryController {

    @Autowired
    private ItinerarySecvice itineraryService;

    @PostMapping
    public ResponseEntity<ItineraryDTO> createItinerary(@RequestBody ItineraryDTO itineraryDTO) {
        ItineraryDTO createdItinerary = itineraryService.createItinerary(itineraryDTO);
        return ResponseEntity.ok(createdItinerary);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItineraryDTO> getItineraryById(@PathVariable Long id) {
        Optional<ItineraryDTO> itineraryDTO = itineraryService.getItineraryById(id);
        return itineraryDTO.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<ItineraryDTO>> getAllItineraries() {
        List<ItineraryDTO> itineraries = itineraryService.getAllItineraries();
        return ResponseEntity.ok(itineraries);
    }

    @GetMapping("/tour-package/{pkgId}")
    public ResponseEntity<List<ItineraryDTO>> findItinerariesByTourPackageId(@PathVariable Long pkgId) {
        List<ItineraryDTO> itineraries = itineraryService.findItinerariesByTourPackageId(pkgId);
        return ResponseEntity.ok(itineraries);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItineraryDTO> updateItinerary(@PathVariable Long id, @RequestBody ItineraryDTO itineraryDTO) {
        ItineraryDTO updatedItinerary = itineraryService.updateItinerary(id, itineraryDTO);
        return ResponseEntity.ok(updatedItinerary);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItinerary(@PathVariable Long id) {
        itineraryService.deleteItinerary(id);
        return ResponseEntity.noContent().build();
    }
}
