package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.TourPackage;
import com.app.repository.TourPackageRepository;

@Service
@Transactional
public class TourPackageImpl implements TourPackageSevice {

    @Autowired
    private TourPackageRepository tourPackageRepository;

    @Override
    public TourPackage addPackage(TourPackage tourPackage) {
        return tourPackageRepository.save(tourPackage);
    }

    @Override
    public TourPackage editPackage(Long id, TourPackage tourPackage) {
        TourPackage existingPackage = tourPackageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Package not found with id " + id));
        existingPackage.setPname(tourPackage.getPname());
        existingPackage.setPrice(tourPackage.getPrice());
        existingPackage.setDescription(tourPackage.getDescription());
        existingPackage.setDuration(tourPackage.getDuration());
        existingPackage.setStartDate(tourPackage.getStartDate());
        return tourPackageRepository.save(existingPackage);
    }

    @Override
    public List<TourPackage> getByName(String name) {
        return tourPackageRepository.findAllByPname(name);
    }

    @Override
    public TourPackage getById(Long id) {
        return tourPackageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Package not found with id " + id));
    }

    @Override
    public String deleteById(Long id) {
        if (tourPackageRepository.existsById(id)) {
            tourPackageRepository.deleteById(id);
            return "Package deleted successfully.";
        }
        throw new RuntimeException("Package not found with id " + id);
    }

    @Override
    public List<TourPackage> getAllPackages() {
        return tourPackageRepository.findAll();
    }
}
