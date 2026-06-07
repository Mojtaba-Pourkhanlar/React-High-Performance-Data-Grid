import apiClient from "@/api/api-client";
import type { OrderListItem } from "@/types";

export const getBidAsks = async (): Promise<OrderListItem[]> => {
  const { data } = await apiClient.get("/bidasks");
  return data.data;
};
