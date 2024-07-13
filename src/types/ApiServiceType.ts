export interface ParamsType {
    client_id: string;
    query: string;
    per_page: number;
    page: number;
  }
  
  export interface Image {
    id: string;
    alt_description: string;
    urls: {
      regular: string;
      small: string;
    };
    description: string;
  }
  
  export interface FetchPhotosResponse {
    total: number;
    total_pages: number;
    results: Image[];
  }