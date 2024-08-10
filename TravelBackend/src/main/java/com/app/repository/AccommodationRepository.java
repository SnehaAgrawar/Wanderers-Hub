package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Accomodation;

public interface AccommodationRepository extends JpaRepository<Accomodation, Long> {
    List<Accomodation> findByDestinationDestId(Long destId);
    Optional<Accomodation> findByName(String name);
}
