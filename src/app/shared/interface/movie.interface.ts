export interface IMovieChanges {
  results: [];
  page: {
    type: number;
    default: 0;
  };
  total_pages: {
    type: number;
    default: 0;
  };
  total_results: {
    type: number;
    default: 0;
  };
}

export interface IMovieList {
  id: number;
  adult: boolean;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belong_to_collection: {} | null;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string | null;
  id: number;
  imdb_id: number | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: [
    {
      name: string;
      id: number;
      logo_path: string | null;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: [
    {
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
