import { BookAPISearchResultItem } from "./book";
import { MovieAPISearchResultItem } from "./movie";
import { VideoGameAPISearchResultItem } from "./videoGame";

export interface MediaList {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  items: MediaItem[];
  name: string;
}

export interface MediaItem<T extends MediaType = MediaType> {
  id: string;
  type: T;
  content: MediaItemContent<T>;
}

export enum MediaType {
  MOVIE = "movie",
  VIDEO_GAME = "videoGame",
  BOOK = "book",
}

export interface MediaItemContentMap {
  [MediaType.MOVIE]: MovieItemContent;
  [MediaType.VIDEO_GAME]: VideoGameItemContent;
  [MediaType.BOOK]: BookItemContent;
}

export type MediaItemContent<T extends MediaType = MediaType> =
  MediaItemContentMap[T];

/**
 * MOVIE
 */

export type MovieItem = MediaItem<MediaType.MOVIE>;

export interface MovieItemContent {
  id: MovieAPISearchResultItem["id"];
}

export const isMovieMedia = (item: MediaItem): item is MovieItem =>
  item.type === MediaType.MOVIE;

/**
 * VIDEO_GAME
 */

export type VideoGameItem = MediaItem<MediaType.VIDEO_GAME>;

export interface VideoGameItemContent {
  id: VideoGameAPISearchResultItem["id"];
}

export const isVideoGameMedia = (item: MediaItem): item is VideoGameItem =>
  item.type === MediaType.VIDEO_GAME;

/**
 * BOOK
 */

export type BookItem = MediaItem<MediaType.BOOK>;

export interface BookItemContent {
  cover_i: BookAPISearchResultItem["cover_i"];
}

export const isBookMedia = (item: MediaItem): item is BookItem =>
  item.type === MediaType.BOOK;
