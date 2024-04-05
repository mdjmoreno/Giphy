const ENV = window?.process?.env || import.meta.env;

export const API_URL = ENV.VITE_API_URL;
export const API_KEY = ENV.VITE_API_KEY;
