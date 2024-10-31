package org.svp.videoservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.svp.videoservice.model.Video;
import org.svp.videoservice.service.VideoService;

import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.List;

@RestController
@RequestMapping("/videos")
public class VideoController {

    @Autowired
    private VideoService videoService;

    private final String IMAGE_DIRECTORY = "src/main/resources/static/";

    @GetMapping("/{id}")
    public ResponseEntity<Video> getVideoDetails(@PathVariable String id) {
        Video video = videoService.getVideoById(id);
        return video != null ? ResponseEntity.ok(video) : ResponseEntity.notFound().build();
    }

    @GetMapping("/image/{id}")
    public ResponseEntity<Resource> getVideoImage(@PathVariable String id) {
        Video video = videoService.getVideoById(id);
        if (video != null) {
            try {
                Path path = Paths.get(IMAGE_DIRECTORY + video.getImagePath());
                Resource resource = new UrlResource(path.toUri());
                if (resource.exists()) {
                    return ResponseEntity.ok()
                            .contentType(MediaType.IMAGE_JPEG)
                            .body(resource);
                }
            } catch (Exception e) {
                return ResponseEntity.internalServerError().build();
            }
        }
        return ResponseEntity.notFound().build();
    }
    
    @GetMapping
    public ResponseEntity<List<Video>> getAllVideos() {
        List<Video> videos = videoService.getAllVideos();
        return ResponseEntity.ok(videos);
    }
}
