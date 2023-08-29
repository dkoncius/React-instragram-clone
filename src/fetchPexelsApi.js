const API = '/api/v1/search?query=';
const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export async function fetchPhotos(page = 1, topic = 'people') {
  try {
    const response = await fetch(`${API}${topic}&page=${page}&per_page=6`, {
      headers: {
        Authorization: API_KEY
      }
    });
    const json = await response.json();

    console.log(json)
    return json.photos;
  } catch (error) {
    console.error('Failed to fetch photos:', error);
    return [];
  }
}
