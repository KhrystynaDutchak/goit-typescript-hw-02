import axios from "axios";
import { ParamsType, FetchPhotosResponse } from "./ApiServiceType";

const API_KEY = "zptrX55x2qZApiVKm68RNNqVMOk5s6W9N19uFgah3zI";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const ApiService = async (
  query: string,
  page: number
): Promise<FetchPhotosResponse> => {
  const params: ParamsType = {
    client_id: API_KEY,
    query: query,
    per_page: 10,
    page: page,
  };
  const { data } = await axios.get<FetchPhotosResponse>("/search/photos/", { params });
  
  data.results = data.results.map(image => ({
    ...image,
    alt_description: image.alt_description || '',
  }));

  console.log(data);

  return data;
};

export default ApiService;