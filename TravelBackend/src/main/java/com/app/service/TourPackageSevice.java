package com.app.service;

import java.util.List;

import com.app.entities.TourPackage;

public interface TourPackageSevice {
	TourPackage addPackage(TourPackage tourPackage);
	
	TourPackage editPackage(Long id,TourPackage tourPackage);
	
	List<TourPackage> getByName(String name);
	
	TourPackage getById(Long id);
	
	String deleteById(Long id);

}
