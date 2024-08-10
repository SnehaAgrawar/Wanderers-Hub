package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.app.dto.DestinationDTO;
import com.app.entities.Destination;
import com.app.repository.DestinationRepository;

@Service
@Transactional
public class DestinationServiceImpl implements DestinationService {

	@Autowired
	public DestinationRepository destinationRepository;

	@Override
	public List<Destination> getDestination() {
		return destinationRepository.findAll();
	}

	@Override
	public Destination adddestination(Destination destination) {
		return destinationRepository.save(destination);
	}

	@Override
	public Destination updateDestinatin(Long id, Destination destination) {
		if (destinationRepository.existsById(id)) {
			return destinationRepository.save(destination);
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "destination not exist");
		}

	}

	@Override
	public String deleteDestination(Long id) {
		if (destinationRepository.existsById(id)) {
			destinationRepository.deleteById(id);
			return "Destination deleted";
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "destination not exist");
		}
	}

	@Override
	public Optional<DestinationDTO> findDestinationByName(String destName) {
		Optional<Destination> destination = destinationRepository.findByDestName(destName);
		return destination.map(this::mapToDTO);
	}
	
	private DestinationDTO mapToDTO(Destination destination) {
        DestinationDTO destinationDTO = new DestinationDTO();
        destinationDTO.setDestId(destination.getDestId());
        destinationDTO.setDestName(destination.getDestName());
        destinationDTO.setState(destination.getState());
        return destinationDTO;
    }

}
