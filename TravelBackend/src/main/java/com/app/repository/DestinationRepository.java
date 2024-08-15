package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Destination;
import java.util.Optional;

public interface DestinationRepository extends JpaRepository<Destination, Long> {
    Optional<Destination> findByDestName(String destName);
}