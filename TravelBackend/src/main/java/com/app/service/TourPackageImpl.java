package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.TourPackage;
import com.app.entities.User;
import com.app.repository.TourPackageRepository;

@Service
@Transactional
public class TourPackageImpl implements TourPackageSevice {
	@Autowired
	TourPackageRepository tourPackageRepository;

	@Override
	public TourPackage addPackage(TourPackage tourPackage) {
		return tourPackageRepository.save(tourPackage);
	}


	
	@Override
	public TourPackage editPackage(Long id, TourPackage tourPackage) {
		TourPackage tourPackage2 = tourPackageRepository.findById(id).orElseThrow();
		tourPackage2.setPname(tourPackage.getPname());
		tourPackage2.setPrice(tourPackage.getPrice());
		tourPackage2.setDescription(tourPackage.getDescription());
        tourPackage2.setDuration(tourPackage.getDuration());
        tourPackage2.setStartDate(tourPackage.getStartDate());
        return tourPackageRepository.save(tourPackage2);
	}

	@Override
	public List<TourPackage> getByName(String name) {
		return tourPackageRepository.findAllByPname(name);
	}

	@Override
	public TourPackage getById(Long id) {
		return tourPackageRepository.findById(id).orElseThrow();
	}

	@Override
	public String deleteById(Long id) {
		if(tourPackageRepository.existsById(id))
		{
			tourPackageRepository.deleteById(id);
			return "deleted";
		}
		return "not deleted";
	}



	@Override
	public List<TourPackage> getAllPackages() {
		return tourPackageRepository.findAll();
	}
	
	

}
