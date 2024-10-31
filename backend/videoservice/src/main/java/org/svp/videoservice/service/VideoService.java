package org.svp.videoservice.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.annotation.PostConstruct;

import org.springframework.stereotype.Service;
import org.svp.videoservice.model.Video;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service
public class VideoService {

    private List<Video> videos;

    @PostConstruct
    public void init() {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Video>> typeReference = new TypeReference<List<Video>>() {};
        InputStream inputStream = getClass().getResourceAsStream("/static/videos.json");
        try {
            videos = mapper.readValue(inputStream, typeReference);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load videos.json", e);
        }
    }

    public Video getVideoById(String id) {
        return videos.stream().filter(video -> video.getId().equals(id)).findFirst().orElse(null);
    }

    public List<Video> getAllVideos() {
        return videos;
    }
}

