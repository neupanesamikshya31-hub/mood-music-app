import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const searchSongs = async (query) => {
  try {
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 20,
          q: query,
          type: "video",
          key: API_KEY,
        },
      }
    );

    return res.data.items;
  } catch (error) {
    console.error("YouTube API Error:", error);

    if (error.response?.status === 429) {
      alert("YouTube API quota exceeded. Please try again later.");
    }

    return [];
  }
};