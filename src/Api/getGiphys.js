import axios from "axios";
import { API_KEY, API_URL } from "./config";

export async function getGiphys(query) {
  const url = new URL(API_URL);
  url.searchParams.append("api_key", API_KEY);
  if (query) url.searchParams.append("q", query);
  url.searchParams.append("limit", 20);

  const res = await axios.get(url.toString());
  return res.data.data;
}
