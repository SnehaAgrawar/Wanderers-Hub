/*
 * package com.app.controllers;
 * 
 * import java.util.List;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.http.ResponseEntity; import
 * org.springframework.web.bind.annotation.*;
 * 
 * import com.app.dto.CustomPackageDTO; import com.app.entities.CustomPackage;
 * import com.app.entities.Destination; import
 * com.app.service.CustomPackageService;
 * 
 * @RestController
 * 
 * @RequestMapping("/customPackages") public class CustomPackageController {
 * 
 * @Autowired private CustomPackageService customPackageService;
 * 
 * @GetMapping public List<CustomPackage> getAllCustomPackages() { return
 * customPackageService.getAllCustomPackages(); }
 * 
 * @GetMapping("/{id}") public ResponseEntity<CustomPackage>
 * getCustomPackageById(@PathVariable Long id) { return
 * customPackageService.getCustomPackageById(id) .map(customPackage ->
 * ResponseEntity.ok().body(customPackage))
 * .orElse(ResponseEntity.notFound().build()); }
 * 
 * @PostMapping public ResponseEntity<CustomPackage>
 * createCustomPackage(@RequestBody CustomPackageDTO customPackageDTO) { return
 * customPackageService.getDestinationById(customPackageDTO.getDestinationId())
 * .map(destination -> { CustomPackage customPackage = new CustomPackage();
 * customPackage.setDestination(destination); CustomPackage savedCustomPackage =
 * customPackageService.saveCustomPackage(customPackage); return
 * ResponseEntity.ok().body(savedCustomPackage);
 * }).orElse(ResponseEntity.badRequest().build()); }
 * 
 * @PutMapping("/{id}") public ResponseEntity<CustomPackage>
 * updateCustomPackage(@PathVariable Long id, @RequestBody CustomPackageDTO
 * customPackageDTO) { return customPackageService.getCustomPackageById(id)
 * .map(existingCustomPackage -> {
 * customPackageService.getDestinationById(customPackageDTO.getDestinationId())
 * .ifPresent(existingCustomPackage::setDestination); CustomPackage
 * updatedCustomPackage =
 * customPackageService.saveCustomPackage(existingCustomPackage); return
 * ResponseEntity.ok().body(updatedCustomPackage);
 * }).orElse(ResponseEntity.notFound().build()); }
 * 
 * @DeleteMapping("/{id}") public ResponseEntity<Void>
 * deleteCustomPackage(@PathVariable Long id) { return
 * customPackageService.getCustomPackageById(id) .map(customPackage -> {
 * customPackageService.deleteCustomPackage(id); return
 * ResponseEntity.ok().<Void>build();
 * }).orElse(ResponseEntity.notFound().build()); } }
 */