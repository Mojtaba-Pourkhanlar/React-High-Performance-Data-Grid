import { useQuery } from "@tanstack/react-query";
import { getAssets } from "./api";
import type { ListItem } from "@/types";
import { ASSETS_QUERY_KEYS } from "./constants";

export const useAssets = () => {
  return useQuery<ListItem[]>({
    queryKey: [ASSETS_QUERY_KEYS.all],
    queryFn: getAssets,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
