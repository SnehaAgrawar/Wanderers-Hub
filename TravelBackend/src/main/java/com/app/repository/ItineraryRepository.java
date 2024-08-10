package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Itinerary;
import java.util.List;

public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
    List<Itinerary> findByTourPackagePkgId(Long pkgId);
}
