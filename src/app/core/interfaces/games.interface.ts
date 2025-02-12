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

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}
