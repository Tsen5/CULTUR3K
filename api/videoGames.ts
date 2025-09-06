import axios, { AxiosRequestConfig } from "axios";

import {
  VideoGameAPISearchResult,
  VideoGameAPIVideoGameInfo,
} from "@/types/videoGame";

const http = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.EXPO_PUBLIC_RAWG_API_KEY,
  },
});

export const videoGamesAPI = {
  searchVideoGames: (query: string, config?: AxiosRequestConfig) =>
    http.get<VideoGameAPISearchResult>("/games", {
      params: {
        search: query,
      },
      ...config,
    }),
  getVideoGame: (id: number, config?: AxiosRequestConfig) =>
    http.get<VideoGameAPIVideoGameInfo>(`/games/${id}`, config),
};
