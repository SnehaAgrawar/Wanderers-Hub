package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.TourPackageSevice;

@RestController
@RequestMapping("/tourpackages")
public class TourPackageController {
	@Autowired
	TourPackageSevice tourPackageSevice;

}
