package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.BookingService;

@RestController
@RequestMapping("/bookings")
public class BookingController {
	@Autowired
	BookingService bookingService;

}
