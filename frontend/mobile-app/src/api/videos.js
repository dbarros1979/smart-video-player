import { BASE_URL } from '@env';

const headers = {
    Authorization: 'your-secret-token',  // Ensure this token is managed securely
};

export async function fetchVideoById(id) {
    try {
        console.debug(`Calling videos API for video ID: ${id}`);
        const response = await fetch(`${BASE_URL}/videos/${id}`, { headers });
        if (!response.ok) throw new Error(`Failed to fetch video with ID: ${id}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching video with ID ${id}:`, error);
        return null;
    }
}

export async function fetchAllVideos() {
    try {
        console.debug("Calling videos API to fetch all videos...");
        const response = await fetch(`${BASE_URL}/videos`, { headers });
        if (!response.ok) throw new Error('Failed to fetch all videos');
        return await response.json();
    } catch (error) {
        console.error("Error fetching all videos:", error);
        return [];
    }
}
