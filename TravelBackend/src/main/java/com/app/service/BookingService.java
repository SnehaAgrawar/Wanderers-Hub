package com.app.service;

import java.util.List;

import com.app.entities.Booking;

public interface BookingService {

	Booking addBooking(Booking booking);

	List<Booking> getBookings();

	Booking getBooking(Long bid);

	String deleteBooking(Long bid);

	Booking updateBooking(Long bid, Booking bookikng);

}
