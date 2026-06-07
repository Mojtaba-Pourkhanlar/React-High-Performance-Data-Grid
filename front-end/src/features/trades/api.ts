import apiClient from "@/api/api-client";
import type { ClosePriceItem } from "@/types";

export const getTrades = async (): Promise<ClosePriceItem[]> => {
  const { data } = await apiClient.get("/trades");
  return data.data;
};
