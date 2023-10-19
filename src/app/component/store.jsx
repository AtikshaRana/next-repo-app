import { proxy } from 'valtio';

export const store = proxy({
  language: 'en', // Default language
  data: null,      // Data fetched from the API
});