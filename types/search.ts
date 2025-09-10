import { BookAPISearchResultItem } from "./book";
import { MediaType } from "./list";
import { MovieAPISearchResultItem } from "./movie";
import { VideoGameAPISearchResultItem } from "./videoGame";

export interface SearchResult<T extends MediaType = MediaType> {
  id: string;
  name: string;
  type: T;
  content: SearchResultContent<T>;
}

export interface SearchResultContentMap {
  [MediaType.VIDEO_GAME]: VideoGameAPISearchResultItem;
  [MediaType.MOVIE]: MovieAPISearchResultItem;
  [MediaType.BOOK]: BookAPISearchResultItem;
}

export type SearchResultContent<T extends MediaType> =
  SearchResultContentMap[T];

export type VideoGameSearchResult = SearchResult<MediaType.VIDEO_GAME>;

export const isVideoGameSearchResult = (
  result: SearchResult,
): result is VideoGameSearchResult => result.type === MediaType.VIDEO_GAME;

export type MovieSearchResult = SearchResult<MediaType.MOVIE>;

export const isMovieSearchResult = (
  result: SearchResult,
): result is MovieSearchResult => result.type === MediaType.MOVIE;

export type BookSearchResult = SearchResult<MediaType.BOOK>;

export const isBookSearchResult = (
  result: SearchResult,
): result is BookSearchResult => result.type === MediaType.BOOK;
