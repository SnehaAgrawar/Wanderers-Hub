package com.app.service;

import com.app.dto.ItineraryDTO;
import java.util.List;
import java.util.Optional;

public interface ItinerarySecvice {
    ItineraryDTO createItinerary(ItineraryDTO itineraryDTO);
    Optional<ItineraryDTO> getItineraryById(Long itineraryId);
    List<ItineraryDTO> getAllItineraries();
    List<ItineraryDTO> findItinerariesByTourPackageId(Long pkgId);
    ItineraryDTO updateItinerary(Long itineraryId, ItineraryDTO itineraryDTO);
    void deleteItinerary(Long itineraryId);
}
