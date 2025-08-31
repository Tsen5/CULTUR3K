export type MoviePosterSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

export const getMoviePosterURL = (
  posterPath: string,
  size: MoviePosterSize = "original",
) => `https://image.tmdb.org/t/p/${size}${posterPath}`;
