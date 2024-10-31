# Video API

A simple Spring Boot API to serve videos details and images from static JSON and image files. This project requires no database and relies on static JSON files for data.

## Features

- Serve video details (title, description) and images from static files.
- JWT-based authentication for secure access (optional).
- Easy to deploy on platforms like Heroku.

## Requirements

- Java 17+
- Maven 3.8+
- (Optional) JWT Authentication libraries if securing endpoints.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/video-api.git
   cd video-api
   ```

2. **Build and run the application**:
   ```bash
   ./mvnw spring-boot:run
   ```

3. **Test API Endpoints**:

   - Get video details by ID:
     ```bash
     curl -X GET http://localhost:8080/videos/{id}
     ```

   - Get video image by ID:
     ```bash
     curl -X GET http://localhost:8080/videos/image/{id} --output image.jpg
     ```

## Project Structure

- `src/main/resources/data/videos.json`: Static JSON file storing video data.
- `src/main/resources/static/images/`: Directory for storing static video images.
- `VideoService`: Loads and provides video data.
- `VideoController`: REST API to access video details and images.

## Example JSON Structure (videos.json)

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
   web: java -jar target/video-api-0.0.1-SNAPSHOT.jar
   ```

2. **Push to Heroku**:
   ```bash
   git add .
   git commit -m "Prepare for Heroku deployment"
   git push heroku main
   ```

## License

This project is licensed under the MIT License.
