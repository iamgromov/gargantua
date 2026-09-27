import ApiService from '../apiService';

export const JSONPLACEHOLDER_API_URL = 'https://jsonplaceholder.typicode.com';

export default new ApiService(import.meta.env.VITE_API_BASE_URL ?? JSONPLACEHOLDER_API_URL);
