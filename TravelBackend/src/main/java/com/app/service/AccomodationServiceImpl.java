package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Accomodation;
import com.app.entities.AccommodationDTO;
import com.app.entities.Destination;
import com.app.repository.AccommodationRepository;
import com.app.repository.DestinationRepository;
import com.app.service.AccomodationService;

@Service
public class AccomodationServiceImpl implements AccomodationService {

	@Autowired
	private AccommodationRepository accommodationRepository;

	@Autowired
	private DestinationRepository destinationRepository;

	@Override
	public AccommodationDTO createAccommodation(AccommodationDTO accommodationDTO) {
		Accomodation accommodation = new Accomodation();
		accommodation.setName(accommodationDTO.getName());
		accommodation.setRoomType(accommodationDTO.getRoomType());
		accommodation.setPricePerNight(accommodationDTO.getPricePerNight());

		Destination destination = destinationRepository.findById(accommodationDTO.getDestinationId())
				.orElseThrow(() -> new RuntimeException("Destination not found"));
		accommodation.setDestination(destination);

		accommodation = accommodationRepository.save(accommodation);
		return mapToDTO(accommodation);
	}

	@Override
	public Optional<AccommodationDTO> getAccommodationById(Long hotelId) {
		Optional<Accomodation> accommodation = accommodationRepository.findById(hotelId);
		return accommodation.map(this::mapToDTO);
	}

	@Override
	public List<AccommodationDTO> getAllAccommodations() {
		return accommodationRepository.findAll().stream().map(this::mapToDTO).collect(Collectors.toList());
	}

	@Override
	public List<AccommodationDTO> findAccommodationsByDestinationId(Long destId) {
		return accommodationRepository.findByDestinationDestId(destId).stream().map(this::mapToDTO)
				.collect(Collectors.toList());
	}

	@Override
	public Optional<AccommodationDTO> findAccommodationByName(String name) {
		Optional<Accomodation> accommodation = accommodationRepository.findByName(name);
		return accommodation.map(this::mapToDTO);
	}

	@Override
	public AccommodationDTO updateAccommodation(Long hotelId, AccommodationDTO accommodationDTO) {
		Accomodation accommodation = accommodationRepository.findById(hotelId)
				.orElseThrow(() -> new RuntimeException("Accommodation not found"));
		accommodation.setName(accommodationDTO.getName());
		accommodation.setRoomType(accommodationDTO.getRoomType());
		accommodation.setPricePerNight(accommodationDTO.getPricePerNight());

		Destination destination = destinationRepository.findById(accommodationDTO.getDestinationId())
				.orElseThrow(() -> new RuntimeException("Destination not found"));
		accommodation.setDestination(destination);

		accommodation = accommodationRepository.save(accommodation);
		return mapToDTO(accommodation);
	}

	@Override
	public void deleteAccommodation(Long hotelId) {
		accommodationRepository.deleteById(hotelId);
	}

	private AccommodationDTO mapToDTO(Accomodation accommodation) {
		AccommodationDTO accommodationDTO = new AccommodationDTO();
		accommodationDTO.setHotelId(accommodation.getHotelId());
		accommodationDTO.setName(accommodation.getName());
		accommodationDTO.setRoomType(accommodation.getRoomType());
		accommodationDTO.setPricePerNight(accommodation.getPricePerNight());
		accommodationDTO.setDestinationId(accommodation.getDestination().getDestId());
		return accommodationDTO;
	}
}
