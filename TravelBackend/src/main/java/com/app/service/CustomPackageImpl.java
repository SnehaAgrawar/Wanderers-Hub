/*
 * package com.app.service;
 * 
 * import java.util.List; import java.util.Optional;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.stereotype.Service;
 * 
 * import com.app.entities.CustomPackage; import com.app.entities.Destination;
 * import com.app.repository.CustomPackageRepository; import
 * com.app.repository.DestinationRepository;
 * 
 * @Service public class CustomPackageImpl implements CustomPackageService {
 * 
 * @Autowired private CustomPackageRepository customPackageRepository;
 * 
 * @Autowired private DestinationRepository destinationRepository;
 * 
 * public List<CustomPackage> getAllCustomPackages() { return
 * customPackageRepository.findAll(); }
 * 
 * public Optional<CustomPackage> getCustomPackageById(Long id) { return
 * customPackageRepository.findById(id); }
 * 
 * public CustomPackage saveCustomPackage(CustomPackage customPackage) { return
 * customPackageRepository.save(customPackage); }
 * 
 * public void deleteCustomPackage(Long id) {
 * customPackageRepository.deleteById(id); }
 * 
 * public Optional<Destination> getDestinationById(Long id) { return
 * destinationRepository.findById(id); } }
 */