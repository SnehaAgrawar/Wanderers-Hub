package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Booking;
import com.app.service.BookingService;

@RestController
@RequestMapping("/bookings")
public class BookingController {
	@Autowired
	BookingService bookingService;

	@PostMapping
	public Booking addBooking(@RequestBody Booking booking) {
		return bookingService.addBooking(booking);
	}

	@GetMapping
	public List<Booking> getBookings() {
		return bookingService.getBookings();
	}

	@GetMapping("/{id}")
	public Booking getBooking(@RequestParam Long bid) {
		return bookingService.getBooking(bid);
	}

	@DeleteMapping("/{id}")
	public String deleteBooking(@RequestParam Long bid) {
		bookingService.deleteBooking(bid);
		return "deleted";
	}
	
	@PutMapping("/{id}")
	public Booking updateBooking(@RequestParam Long bid, @RequestBody Booking booking) {
		return bookingService.updateBooking(bid,booking);
	}
	
}
