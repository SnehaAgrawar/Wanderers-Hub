package com.app.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DestinationDTO {
    private Long destId;
    private String destName;
    private String state;
}

