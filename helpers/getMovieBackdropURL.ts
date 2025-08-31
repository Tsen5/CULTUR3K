export type MovieBackdropSize = "w300" | "w780" | "w1280" | "original";

export const getMovieBackdropURL = (
  backdropPath: string,
  size: MovieBackdropSize = "original",
) => `https://image.tmdb.org/t/p/${size}${backdropPath}`;
