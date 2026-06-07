import { useQuery } from "@tanstack/react-query";
import { getAssetDetail } from "./api";
import type { ListDetailResponse } from "@/types";
import { ASSET_DETAIL_KEYS } from "./constants";

export const useAssetDetail = (id: string) => {
  return useQuery<ListDetailResponse>({
    queryKey: [ASSET_DETAIL_KEYS.all, id],
    queryFn: () => getAssetDetail(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};
