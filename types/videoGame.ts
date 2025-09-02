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
  // ----- COMMUNICATED BY DOCUMENTATION :
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: VideoGameRating[];
  rating_count: number;
  // reviews_text_count: number | string; // don't know what this is and doc says string but it's a number
  added: number;
  added_by_status: VideoGameAddedByStatus;
  metacritic: number | null;
  playtime: number; // in hours
  suggestions_count: number;
  updated: string;
  esrb_rating: VideoGameESRBRating | null;
  platforms: VideoGamePlatformInfo[];
  // ----- NOT COMMUNICATED BY DOCUMENTATION :
  reviews_count: number;
  dominant_color: string;
  saturated_color: string;
  genres: VideoGameGenre[];
  scores: string;
  short_screenshots: VideoGameScreenshot[];
  stores: VideoGameStoreInfo[];
  tags: VideoGameTag[];
  // clip
  // user_game
}

export interface VideoGameAPIVideoGameInfo {
  // ----- COMMUNICATED BY DOCUMENTATION :
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number | null;
  metacritic_platforms: VideoGameMetacriticPlatform[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: VideoGameRating[];
  reactions: object; // don't know what this is
  added: number;
  added_by_status: VideoGameAddedByStatus;
  playtime: number; // in hours
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number; // doc says string but it's a number
  youtube_count: number; // doc says string but it's a number
  reviews_text_count: number; // doc says string but it's a number
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: VideoGameESRBRating | null;
  platforms: VideoGamePlatformInfo[];
  // ----- NOT COMMUNICATED BY DOCUMENTATION :
  reviews_count: number;
  dominant_color: string;
  saturated_color: string;
  stores: VideoGameStoreInfo[];
  developers: VideoGameDeveloper[];
  genres: VideoGameGenre[];
  tags: VideoGameTag[];
  publishers: VideoGamePublisher[];
  description_raw: string;
  // clip
  // user_game
}

export interface VideoGameDeveloper {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface VideoGamePublisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface VideoGameMetacriticPlatform {
  metascore: number | null;
  url: string;
}

export interface VideoGameESRBRating {
  id: number;
  slug: string;
  name: string;
}

export interface VideoGameAddedByStatus {
  yet: number;
  owned: number;
  toplay: number;
  dropped: number;
  playing: number;
  beaten: number;
}

export interface VideoGameRating {
  id: number;
  title: string;
  count: number;
  percent: number;
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
  // ----- COMMUNICATED BY DOCUMENTATION :
  id: number;
  name: string;
  slug: string;
  // ----- NOT COMMUNICATED BY DOCUMENTATION :
  games_count: number;
  image: string | null;
  image_background: string;
  year_end: number | null;
  year_start: number | null;
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
