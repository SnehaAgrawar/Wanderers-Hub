package com.app.service;

import com.app.dto.BookingDTO;
import com.app.entities.Booking;
import com.app.entities.User;
import com.app.entities.TourPackage;
import com.app.entities.CustomPackage;
import com.app.repository.BookingRepository;
import com.app.repository.UserRepository;
import com.app.repository.TourPackageRepository;
import com.app.repository.CustomPackageRepository;
import com.app.service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TourPackageRepository tourPackageRepository;

    @Autowired
    private CustomPackageRepository customPackageRepository;

    @Override
    public BookingDTO createBooking(BookingDTO bookingDTO) {
        Booking booking = new Booking();
        booking.setBookingDate(bookingDTO.getBookingDate());
        booking.setTotalCost(bookingDTO.getTotalCost());
        booking.setStatus(bookingDTO.getStatus());

        User user = userRepository.findById(bookingDTO.getUserId())
                                  .orElseThrow(() -> new RuntimeException("User not found"));
        booking.setUser(user);

        TourPackage tourPackage = tourPackageRepository.findById(bookingDTO.getPkgId())
                                                       .orElseThrow(() -> new RuntimeException("Package not found"));
        booking.setTourPackage(tourPackage);

//        if (bookingDTO.getCustomPkgId() != null) {
//            CustomPackage customPackage = customPackageRepository.findById(bookingDTO.getCustomPkgId())
//                                                                 .orElseThrow(() -> new RuntimeException("Custom Package not found"));
//            booking.setCustomPackage(customPackage);
//        }

        Booking savedBooking = bookingRepository.save(booking);
        bookingDTO.setBookingId(savedBooking.getBookingId());

        return bookingDTO;
    }

    @Override
    public BookingDTO updateBooking(Long id, BookingDTO bookingDTO) {
        Booking booking = bookingRepository.findById(id)
                                           .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setBookingDate(bookingDTO.getBookingDate());
        booking.setTotalCost(bookingDTO.getTotalCost());
        booking.setStatus(bookingDTO.getStatus());

        User user = userRepository.findById(bookingDTO.getUserId())
                                  .orElseThrow(() -> new RuntimeException("User not found"));
        booking.setUser(user);

        TourPackage tourPackage = tourPackageRepository.findById(bookingDTO.getPkgId())
                                                       .orElseThrow(() -> new RuntimeException("Package not found"));
        booking.setTourPackage(tourPackage);

		/*
		 * if (bookingDTO.getCustomPkgId() != null) { CustomPackage customPackage =
		 * customPackageRepository.findById(bookingDTO.getCustomPkgId()) .orElseThrow(()
		 * -> new RuntimeException("Custom Package not found"));
		 * booking.setCustomPackage(customPackage); } else {
		 * booking.setCustomPackage(null); }
		 */

        bookingRepository.save(booking);

        return bookingDTO;
    }

    @Override
    public void deleteBooking(Long id) {
        Booking booking = bookingRepository.findById(id)
                                           .orElseThrow(() -> new RuntimeException("Booking not found"));
        bookingRepository.delete(booking);
    }

    @Override
    public BookingDTO getBookingById(Long id) {
        Booking booking = bookingRepository.findById(id)
                                           .orElseThrow(() -> new RuntimeException("Booking not found"));
        return mapToDTO(booking);
    }

    @Override
    public List<BookingDTO> getAllBookings() {
        return bookingRepository.findAll()
                                .stream()
                                .map(this::mapToDTO)
                                .collect(Collectors.toList());
    }

    private BookingDTO mapToDTO(Booking booking) {
        BookingDTO dto = new BookingDTO();
        dto.setBookingId(booking.getBookingId());
        dto.setBookingDate(booking.getBookingDate());
        dto.setTotalCost(booking.getTotalCost());
        dto.setStatus(booking.getStatus());
        dto.setUserId(booking.getUser().getUserId());
        dto.setPkgId(booking.getTourPackage().getPkgId());
       // dto.setCustomPkgId(booking.getCustomPackage() != null ? booking.getCustomPackage().getCustomPkgId() : null);
        return dto;
    }
}
