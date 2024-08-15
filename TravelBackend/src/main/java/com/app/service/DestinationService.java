package com.app.service;

import com.app.dto.DestinationDTO;
import java.util.List;
import java.util.Optional;

public interface DestinationService {
	DestinationDTO createDestination(DestinationDTO destinationDTO);

	Optional<DestinationDTO> getDestinationById(Long destId);

	List<DestinationDTO> getAllDestinations();

	Optional<DestinationDTO> findDestinationByName(String destName);

	DestinationDTO updateDestination(Long destId, DestinationDTO destinationDTO);

	void deleteDestination(Long destId);
}
