package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.DestinationDTO;
import com.app.entities.Destination;

public interface DestinationService {

	List<Destination> getDestination();

	Destination adddestination(Destination destination);

	Destination updateDestinatin(Long id, Destination destination);

	String deleteDestination(Long id);

	Optional<DestinationDTO> findDestinationByName(String destName);

}
