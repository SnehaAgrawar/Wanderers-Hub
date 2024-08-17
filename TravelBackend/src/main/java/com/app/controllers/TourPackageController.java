package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.app.entities.TourPackage;
import com.app.service.TourPackageSevice;

@RestController
@RequestMapping("/tourpackages")
public class TourPackageController {

    @Autowired
    private TourPackageSevice tourPackageService;

    @PostMapping
    public TourPackage addPackage(@RequestBody TourPackage tourPackage) {
        return tourPackageService.addPackage(tourPackage);
    }

    @PutMapping("/{id}")
    public TourPackage editPackage(@PathVariable Long id, @RequestBody TourPackage tourPackage) {
        return tourPackageService.editPackage(id, tourPackage);
    }

    @GetMapping("/{name}")
    public List<TourPackage> getByName(@PathVariable String name) {
        return tourPackageService.getByName(name);
    }

    @GetMapping("/get/{id}")
    public TourPackage getById(@PathVariable Long id) {
        return tourPackageService.getById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable Long id) {
        return tourPackageService.deleteById(id);
    }

    @GetMapping
    public List<TourPackage> getAllPackages() {
        return tourPackageService.getAllPackages();
    }
}
