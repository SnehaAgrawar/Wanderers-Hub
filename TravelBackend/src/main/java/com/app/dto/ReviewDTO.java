package com.app.dto;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ReviewDTO {
    private Long reviewId;
    private Integer rating;
    private String comment;
    private LocalDateTime dateTime;
}
