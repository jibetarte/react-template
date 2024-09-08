import axios from "axios";

export const apiClient = axios.create({
  // Aca va la url del backend
  baseURL: "http://127.0.0.1:3000/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS",
} as const;
