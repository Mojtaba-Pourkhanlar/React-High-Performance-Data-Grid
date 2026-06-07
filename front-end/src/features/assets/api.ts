import apiClient from "@/api/api-client";
import type { ListItem } from "@/types";

export const getAssets = async (): Promise<ListItem[]> => {
  const { data } = await apiClient.get("/assets");
  return data.data;
};
