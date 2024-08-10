package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ItineraryDTO;
import com.app.entities.Itinerary;
import com.app.entities.TourPackage;
import com.app.repository.ItineraryRepository;
import com.app.repository.TourPackageRepository;

@Service
public class ItineraryServiceImpl implements ItinerarySecvice {

	@Autowired
	private ItineraryRepository itineraryRepository;

	@Autowired
	private TourPackageRepository tourPackageRepository;

	@Override
	public ItineraryDTO createItinerary(ItineraryDTO itineraryDTO) {
		Itinerary itinerary = new Itinerary();
		itinerary.setDay(itineraryDTO.getDay());
		itinerary.setDescription(itineraryDTO.getDescription());
		itinerary.setLocation(itineraryDTO.getLocation());

		TourPackage tourPackage = tourPackageRepository.findById(itineraryDTO.getTourPackageId())
				.orElseThrow(() -> new RuntimeException("Tour Package not found"));
		itinerary.setTourPackage(tourPackage);

		itinerary = itineraryRepository.save(itinerary);
		return mapToDTO(itinerary);
	}

	@Override
	public Optional<ItineraryDTO> getItineraryById(Long itineraryId) {
		Optional<Itinerary> itinerary = itineraryRepository.findById(itineraryId);
		return itinerary.map(this::mapToDTO);
	}

	@Override
	public List<ItineraryDTO> getAllItineraries() {
		return itineraryRepository.findAll().stream().map(this::mapToDTO).collect(Collectors.toList());
	}

	@Override
	public List<ItineraryDTO> findItinerariesByTourPackageId(Long pkgId) {
		return itineraryRepository.findByTourPackagePkgId(pkgId).stream().map(this::mapToDTO)
				.collect(Collectors.toList());
	}

	@Override
	public ItineraryDTO updateItinerary(Long itineraryId, ItineraryDTO itineraryDTO) {
		Itinerary itinerary = itineraryRepository.findById(itineraryId)
				.orElseThrow(() -> new RuntimeException("Itinerary not found"));
		itinerary.setDay(itineraryDTO.getDay());
		itinerary.setDescription(itineraryDTO.getDescription());
		itinerary.setLocation(itineraryDTO.getLocation());

		TourPackage tourPackage = tourPackageRepository.findById(itineraryDTO.getTourPackageId())
				.orElseThrow(() -> new RuntimeException("Tour Package not found"));
		itinerary.setTourPackage(tourPackage);

		itinerary = itineraryRepository.save(itinerary);
		return mapToDTO(itinerary);
	}

	@Override
	public void deleteItinerary(Long itineraryId) {
		itineraryRepository.deleteById(itineraryId);
	}

	private ItineraryDTO mapToDTO(Itinerary itinerary) {
		ItineraryDTO itineraryDTO = new ItineraryDTO();
		itineraryDTO.setItineraryId(itinerary.getItineraryId());
		itineraryDTO.setDay(itinerary.getDay());
		itineraryDTO.setDescription(itinerary.getDescription());
		itineraryDTO.setLocation(itinerary.getLocation());
		itineraryDTO.setTourPackageId(itinerary.getTourPackage().getPkgId());
		return itineraryDTO;
	}
}
