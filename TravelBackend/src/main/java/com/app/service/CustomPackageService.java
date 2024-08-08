package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.entities.CustomPackage;
import com.app.entities.Destination;

public interface CustomPackageService {
	List<CustomPackage> getAllCustomPackages();
	Optional<CustomPackage> getCustomPackageById(Long id);
	CustomPackage saveCustomPackage(CustomPackage customPackage);
	void deleteCustomPackage(Long id);
	Optional<Destination> getDestinationById(Long id);
}
