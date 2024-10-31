# Movie API

A simple Spring Boot API to serve movie details and images from static JSON and image files. This project requires no database and relies on static JSON files for data.

## Features

- Serve movie details (title, description) and images from static files.
- JWT-based authentication for secure access (optional).
- Easy to deploy on platforms like Heroku.

## Requirements

- Java 17+
- Maven 3.8+
- (Optional) JWT Authentication libraries if securing endpoints.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/movie-api.git
   cd movie-api
   ```

2. **Build and run the application**:
   ```bash
   ./mvnw spring-boot:run
   ```

3. **Test API Endpoints**:

   - Get movie details by ID:
     ```bash
     curl -X GET http://localhost:8080/movies/{id}
     ```

   - Get movie image by ID:
     ```bash
     curl -X GET http://localhost:8080/movies/image/{id} --output image.jpg
     ```

## Project Structure

- `src/main/resources/data/movies.json`: Static JSON file storing movie data.
- `src/main/resources/static/images/`: Directory for storing static movie images.
- `MovieService`: Loads and provides movie data.
- `MovieController`: REST API to access movie details and images.

## Example JSON Structure (movies.json)

```json
[
    {
        "id": "1",
        "title": "Inception",
        "description": "A mind-bending thriller about dream invasion.",
        "imagePath": "images/inception.jpg"
    },
    {
        "id": "2",
        "title": "The Matrix",
        "description": "A hacker discovers a dystopian reality.",
        "imagePath": "images/matrix.jpg"
    }
]
```

## Deploying on Heroku

1. **Create a `Procfile`** with the following content:
   ```
   web: java -jar target/movie-api-0.0.1-SNAPSHOT.jar
   ```

2. **Push to Heroku**:
   ```bash
   git add .
   git commit -m "Prepare for Heroku deployment"
   git push heroku main
   ```

## License

This project is licensed under the MIT License.
