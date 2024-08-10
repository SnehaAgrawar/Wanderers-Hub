package com.app.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ItineraryDTO {
    private Long itineraryId;
    private Integer day;
    private String description;
    private String location;
    private Long tourPackageId; // Reference to the TourPackage entity
}
