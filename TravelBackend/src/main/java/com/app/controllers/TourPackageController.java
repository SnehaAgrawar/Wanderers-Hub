package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.TourPackage;
import com.app.service.TourPackageSevice;

@RestController
@RequestMapping("/tourpackages")
public class TourPackageController {
	@Autowired
	TourPackageSevice tourPackageSevice;
	
	@PostMapping
	public TourPackage addPackage(@RequestBody TourPackage tourPackage)
	{
		return tourPackageSevice.addPackage(tourPackage);
	}
	
	@PutMapping("/{id}")
    public TourPackage editPackage(@PathVariable Long id, @RequestBody TourPackage tourPackage) {
        return tourPackageSevice.editPackage(id,tourPackage);
    }
	
	@GetMapping("/{name}")
	public List<TourPackage> getByName(@PathVariable String name)
	{
		return tourPackageSevice.getByName(name);
	}
	
	@GetMapping("/get/{id}")
	public TourPackage getById(@PathVariable Long id)
	{
		return tourPackageSevice.getById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteById(@PathVariable Long id)
	{
		return tourPackageSevice.deleteById(id);
	}

}
