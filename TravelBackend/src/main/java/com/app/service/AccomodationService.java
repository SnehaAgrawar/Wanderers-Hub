
package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.entities.AccommodationDTO;

public interface AccomodationService {
	AccommodationDTO createAccommodation(AccommodationDTO accommodationDTO);

	Optional<AccommodationDTO> getAccommodationById(Long hotelId);

	List<AccommodationDTO> getAllAccommodations();

	List<AccommodationDTO> findAccommodationsByDestinationId(Long destId);

	Optional<AccommodationDTO> findAccommodationByName(String name);

	AccommodationDTO updateAccommodation(Long hotelId, AccommodationDTO accommodationDTO);

	void deleteAccommodation(Long hotelId);
}
