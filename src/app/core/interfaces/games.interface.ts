export interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}
export interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
  metacritic: number;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  playtime: number;
  genres: Genre[];
  parent_platforms: ParentPlatform[];
  platforms: PlatformInfo[];
  stores: StoreInfo[];
  tags: Tag[];
  suggestions_count: number;
  updated: string;
  name_original?: string;
  background_image_additional?: string;
  metacritic_url?: string;
  description?: string;
  description_raw?: string;
  achievements_count?: number;
  added?: number;
  added_by_status?: {
    beaten?: number;
    dropped?: number;
    owned?: number;
    playing?: number;
    toplay?: number;
    yet?: number;
  };
  additions_count?: number;
  alternative_names?: string[];
  creators_count?: number;
  developers?: Developer[];
  dominant_color?: string;
  esrb_rating?: EsrbRating;
  game_series_count?: number;
  metacritic_platforms?: any[]; // refine if needed
  movies_count?: number;
  parent_achievements_count?: number;
  parents_count?: number;
  publishers?: Publisher[];
  reactions?: { [key: string]: number } | any;
  reddit_count?: number;
  reddit_description?: string;
  reddit_logo?: string;
  reddit_name?: string;
  reddit_url?: string;
  reviews_count?: number;
  reviews_text_count?: number;
  saturated_color?: string;
  screenshots_count?: number;
  tba?: boolean;
  twitch_count?: number;
  website?: string;
  youtube_count?: number;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface ParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  image_background: string;
  year_start: number | null;
  year_end: number | null;
  games_count: number;
  games: Game[];
}
export interface PlatformInfo {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
  released_at: string;
  requirements_en?: {
    minimum?: string;
    recommended?: string;
  };
}

export interface StoreInfo {
  id: number;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
  };
}
export interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
  image_background: string;
  games_count: number;
  games: Game[];
}
export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
