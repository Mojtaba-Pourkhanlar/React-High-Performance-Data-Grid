import { useQuery } from "@tanstack/react-query";
import { getTrades } from "./api";
import type { ClosePriceItem } from "@/types";
import { TRADES_QUERY_KEYS } from "./constants";

export const useTrades = () => {
  return useQuery<ClosePriceItem[]>({
    queryKey: TRADES_QUERY_KEYS.all,
    queryFn: getTrades,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
