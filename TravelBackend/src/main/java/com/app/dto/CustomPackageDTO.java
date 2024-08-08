package com.app.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CustomPackageDTO {
    private Long customPkgId;
    private Long destinationId; // Assuming you want to pass the destination ID
}
