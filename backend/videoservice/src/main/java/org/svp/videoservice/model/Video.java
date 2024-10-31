package org.svp.videoservice.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Video {
    private String id;
    private String title;
    private String description;
    private String imagePath;
}

