package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Destination;

public interface DestinationRepository extends JpaRepository<Destination, Long> {

	Optional<Destination> findByDestName(String destName);
}
