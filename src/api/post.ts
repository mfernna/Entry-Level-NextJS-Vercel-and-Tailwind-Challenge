import { Post } from "../types/post";
import { api } from "./axios";

export const getPosts = async (url: string) => {
  const response = await api.get<Post[]>(url);
  return response.data;
};
