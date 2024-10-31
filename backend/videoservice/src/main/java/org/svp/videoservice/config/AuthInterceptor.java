package org.svp.videoservice.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class AuthInterceptor implements HandlerInterceptor {

    @Value("${app.token}")
    private String token;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // Retrieve the token from the Authorization header
        String requestToken = request.getHeader("Authorization");

        // Check if the Authorization header contains "Bearer <token>"
        if (requestToken != null && requestToken.startsWith("Bearer ")) {
            requestToken = requestToken.substring(7); // Remove "Bearer " prefix
        }

        if (token.equals(requestToken)) {
            return true; // Allow request to proceed if token matches
        }

        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("Unauthorized - Invalid token");
        return false; // Block request if token doesn't match
    }
}
