package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.DestinationDTO;
import com.app.entities.Destination;
import com.app.repository.DestinationRepository;

@Service
public class DestinationServiceImpl implements DestinationService {

    @Autowired
    private DestinationRepository destinationRepository;

    @Override
    public DestinationDTO createDestination(DestinationDTO destinationDTO) {
        Destination destination = new Destination();
        destination.setDestName(destinationDTO.getDestName());
        destination.setState(destinationDTO.getState());
        destination = destinationRepository.save(destination);
        return mapToDTO(destination);
    }

    @Override
    public Optional<DestinationDTO> getDestinationById(Long destId) {
        Optional<Destination> destination = destinationRepository.findById(destId);
        return destination.map(this::mapToDTO);
    }

    @Override
    public List<DestinationDTO> getAllDestinations() {
        return destinationRepository.findAll().stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    @Override
    public Optional<DestinationDTO> findDestinationByName(String destName) {
        Optional<Destination> destination = destinationRepository.findByDestName(destName);
        return destination.map(this::mapToDTO);
    }

    @Override
    public DestinationDTO updateDestination(Long destId, DestinationDTO destinationDTO) {
        Destination destination = destinationRepository.findById(destId).orElseThrow(() -> new RuntimeException("Destination not found"));
        destination.setDestName(destinationDTO.getDestName());
        destination.setState(destinationDTO.getState());
        destination = destinationRepository.save(destination);
        return mapToDTO(destination);
    }

    @Override
    public void deleteDestination(Long destId) {
        destinationRepository.deleteById(destId);
    }

    private DestinationDTO mapToDTO(Destination destination) {
        DestinationDTO destinationDTO = new DestinationDTO();
        destinationDTO.setDestId(destination.getDestId());
        destinationDTO.setDestName(destination.getDestName());
        destinationDTO.setState(destination.getState());
        return destinationDTO;
    }
}
