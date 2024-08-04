package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.app.entities.Booking;
import com.app.repository.BookingRepository;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

	@Autowired
	BookingRepository bookingRepository;

	@Override
	public Booking addBooking(Booking booking) {
		return bookingRepository.save(booking);
	}

	@Override
	public List<Booking> getBookings() {
		return bookingRepository.findAll();
	}

	@Override
	public Booking getBooking(Long bid) {
		Booking booking = bookingRepository.findById(bid)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "invalid id"));
		return booking;
	}

	@Override
	public String deleteBooking(Long bid) {
		if(bookingRepository.existsById(bid)) {
			bookingRepository.deleteById(bid);
			return "deleted";
		}else {
			return "deletion failed";
		}
	}

	@Override
	public Booking updateBooking(Long bid, Booking booking) {
		if(bookingRepository.existsById(bid)) {
			return bookingRepository.save(booking);
		}else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,"invalid id");
		}
	}

}
