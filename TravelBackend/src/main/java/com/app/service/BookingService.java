package com.app.service;

import com.app.dto.BookingDTO;
import com.app.entities.Booking;

import java.util.List;

public interface BookingService {
    BookingDTO createBooking(BookingDTO bookingDTO);
    BookingDTO updateBooking(Long id, BookingDTO bookingDTO);
    void deleteBooking(Long id);
    BookingDTO getBookingById(Long id);
    List<BookingDTO> getAllBookings();
    List<BookingDTO> getBookingsByGuide(Long guideId);
    
    }
