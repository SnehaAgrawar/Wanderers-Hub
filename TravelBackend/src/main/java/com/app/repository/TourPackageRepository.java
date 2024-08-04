package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.TourPackage;
@Repository
public interface TourPackageRepository extends JpaRepository<TourPackage, Long> {
	
	List<TourPackage> findAllByName(String name);

}
