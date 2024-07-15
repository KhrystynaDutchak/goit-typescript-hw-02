export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  description: string | null;
  alt_description: string | null;
}

export interface FetchPhotosResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface ParamsType {
  client_id: string;
  query: string;
  per_page: number;
  page: number;
}