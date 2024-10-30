package org.svp.movieservice.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Movie {
    private String id;
    private String title;
    private String description;
    private String imagePath;
}

