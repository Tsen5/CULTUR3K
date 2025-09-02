import axios from "axios";

import { MovieAPIMovieInfo, MovieAPISearchResult } from "@/types/movie";

const http = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY,
  },
});

export const moviesAPI = {
  searchMovies: (query: string) =>
    http.get<MovieAPISearchResult>("/search/movie", {
      params: {
        query,
      },
    }),
  getMovie: (id: number) => http.get<MovieAPIMovieInfo>(`/movie/${id}`),
};
