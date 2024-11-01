package org.svp.videoservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.svp.videoservice.model.Video;
import org.svp.videoservice.service.VideoService;
import org.springframework.util.StreamUtils;

import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.List;

import java.io.IOException;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/videos")
public class VideoController {

    @Autowired
    private VideoService videoService;

    private final String IMAGE_DIRECTORY = "src/main/resources/static/";
    
    private byte[] loadImage(String imagePath) {
        try {
            Path path = Paths.get(IMAGE_DIRECTORY + imagePath);
            UrlResource resource = new UrlResource(path.toUri());
            if (resource.exists()) {
                return StreamUtils.copyToByteArray(resource.getInputStream());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }    

    @GetMapping("/{id}")
    public ResponseEntity<Video> getVideoDetails(@PathVariable String id) {
        Video video = videoService.getVideoById(id);
        if (video != null) {
            byte[] imageData = loadImage(video.getImagePath());
            video.setImage(imageData);
            return ResponseEntity.ok(video);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Video>> getAllVideos() {
        List<Video> videos = videoService.getAllVideos().stream()
            .peek(video -> video.setImage(loadImage(video.getImagePath())))
            .collect(Collectors.toList());
        return ResponseEntity.ok(videos);
    }
}
