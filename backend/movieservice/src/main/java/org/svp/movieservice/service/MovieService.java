package org.svp.movieservice.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.svp.movieservice.model.Movie;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service
public class MovieService {

    private List<Movie> movies;

    @PostConstruct
    public void init() {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Movie>> typeReference = new TypeReference<List<Movie>>() {};
        InputStream inputStream = getClass().getResourceAsStream("/data/movies.json");
        try {
            movies = mapper.readValue(inputStream, typeReference);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load movies.json", e);
        }
    }

    public Movie getMovieById(String id) {
        return movies.stream().filter(movie -> movie.getId().equals(id)).findFirst().orElse(null);
    }

    public List<Movie> getAllMovies() {
        return movies;
    }
}

