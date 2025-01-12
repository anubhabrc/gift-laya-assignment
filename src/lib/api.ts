import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-db-vercel.vercel.app",
});
