import axios, { AxiosResponse } from 'axios';
import { ParamsType, FetchPhotosResponse } from '../types/ApiServiceType';

const API_KEY = 'DoNcpsYpjca-7sSF9nnM1KURCbJfGaK5XPBofFIq1ek';
axios.defaults.baseURL = 'https://api.unsplash.com/';

const ApiService = async (query: string, page: number): Promise<AxiosResponse<FetchPhotosResponse>> => {
  const params: ParamsType = {
    client_id: API_KEY,
    query: query,
    per_page: 12,
    page: page,
  };
  return await axios.get<FetchPhotosResponse>('/search/photos', { params });
};

export default ApiService;