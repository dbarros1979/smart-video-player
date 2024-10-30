package org.svp.movieservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.svp.movieservice.model.Movie;
import org.svp.movieservice.service.MovieService;

import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    private final String IMAGE_DIRECTORY = "src/main/resources/static/";

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieDetails(@PathVariable String id) {
        Movie movie = movieService.getMovieById(id);
        return movie != null ? ResponseEntity.ok(movie) : ResponseEntity.notFound().build();
    }

    @GetMapping("/image/{id}")
    public ResponseEntity<Resource> getMovieImage(@PathVariable String id) {
        Movie movie = movieService.getMovieById(id);
        if (movie != null) {
            try {
                Path path = Paths.get(IMAGE_DIRECTORY + movie.getImagePath());
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
}
