import { useQuery } from "@tanstack/react-query";
import { getBidAsks } from "./api";
import type { OrderListItem } from "@/types";
import { ORDER_BOOK_QUERY_KEYS } from "./constants";

export const useOrderBook = () => {
  return useQuery<OrderListItem[]>({
    queryKey: ORDER_BOOK_QUERY_KEYS.all,
    queryFn: getBidAsks,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
