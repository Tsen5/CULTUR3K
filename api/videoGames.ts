import axios from "axios";

import { VideoGameAPISearchResult } from "@/types/videoGame";

const http = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.EXPO_PUBLIC_RAWG_API_KEY,
  },
});

export const videoGamesAPI = {
  searchVideoGames: (query: string) =>
    http.get<VideoGameAPISearchResult>("/games", {
      params: {
        search: query,
      },
    }),
};
