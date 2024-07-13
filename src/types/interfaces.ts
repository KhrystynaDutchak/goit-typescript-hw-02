export interface Image {
    id: string;
    alt_description: string;
    urls: {
      regular: string;
      small: string;
    };
    description: string;
  }
  
  export interface SelectedPhoto {
    src: string;
    description: string;
  }
  
  export interface FetchPhotosResponse {
    total: number;
    total_pages: number;
    results: Image[];
  }