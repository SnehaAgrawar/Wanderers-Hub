package com.app.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AccommodationDTO {
    private Long hotelId;
    private String name;
    private String roomType;
    private Double pricePerNight;
    private Long destinationId; // Reference to the Destination entity
}
