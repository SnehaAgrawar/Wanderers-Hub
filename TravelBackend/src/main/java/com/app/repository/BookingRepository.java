package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Booking;
import com.app.entities.UserType;
@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
	List<Booking> findByUser_UserId(Long guideId);
	List<Booking> findByUserUserIdAndUserUserType(Long userId, UserType userType);
	}
