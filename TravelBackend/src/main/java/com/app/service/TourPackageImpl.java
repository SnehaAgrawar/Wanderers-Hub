package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repository.TourPackageRepository;

@Service
@Transactional
public class TourPackageImpl implements TourPackageSevice {
	@Autowired
	TourPackageRepository tourPackageREpository;

}
