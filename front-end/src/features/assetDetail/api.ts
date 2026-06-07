import apiClient from "@/api/api-client";
import type { ListDetailResponse } from "@/types";

export const getAssetDetail = async (
  id: string,
): Promise<ListDetailResponse> => {
  const { data } = await apiClient.get(`/assets/${id}`);
  return data;
};
