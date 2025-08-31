/**
 * API (https://rawg.io/apidocs)
 */

export interface VideoGameAPISearchResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: VideoGameAPISearchResultItem[];
  user_platforms: boolean;
}

export interface VideoGameAPISearchResultItem {
  id: number;
  name: string;
  background_image: string;
  dominant_color: string;
  saturated_color: string;
  genres: VideoGameGenre[];
  platforms: VideoGamePlatformInfo[];
  rating: number;
  rating_count: number;
  released: string;
  short_screenshots: VideoGameScreenshot[];
  slug: string;
  stores: VideoGameStoreInfo[];
  tags: VideoGameTag[];
  updated: string;
}

export interface VideoGameGenre {
  id: number;
  name: string;
  slug: string;
}

export interface VideoGamePlatformInfo {
  platform: VideoGamePlatform;
  released_at: string | null;
  requirements: { minimum: string; recommended: string } | null;
}

export interface VideoGamePlatform {
  id: number;
  name: string;
  slug: string;
}

export interface VideoGameScreenshot {
  id: number;
  image: string;
}

export interface VideoGameStoreInfo {
  store: VideoGameStore;
}

export interface VideoGameStore {
  id: number;
  name: string;
  slug: string;
}

export interface VideoGameTag {
  games_count: number;
  id: number;
  image_background: string;
  language: string;
  name: string;
  slug: string;
}
