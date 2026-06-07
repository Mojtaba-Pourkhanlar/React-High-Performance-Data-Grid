import type { AssetWithTrade, ClosePriceItem } from "@/types";
import { useMemo } from "react";
import { useTrades } from "../trades/hooks";
import { useAssets } from "./hooks";

export const useAssetsWithPrice = () => {
  const {
    data: assets = [],
    isLoading: assetsLoading,
    error: assetsError,
  } = useAssets();
  const {
    data: trades = [],
    isLoading: tradesLoading,
    error: tradesError,
  } = useTrades();

  const tradeMap = useMemo(() => {
    const map = new Map<string, ClosePriceItem>();
    for (const trade of trades) {
      const assetId = trade.entity?.id;
      if (assetId) {
        map.set(assetId, trade);
      }
    }
    return map;
  }, [trades]);

  const enrichedAssets = useMemo((): AssetWithTrade[] => {
    return assets.map((asset) => {
      const trade = tradeMap.get(asset.entity?.id);
      return {
        ...asset,
        closePrice: trade?.value?.close_price ?? null,
        tradeDataValue: trade?.value?.value ?? null,
        tradeData: trade ?? null,
      };
    });
  }, [assets, tradeMap]);

  return {
    data: enrichedAssets,
    isLoading: assetsLoading || tradesLoading,
    error: assetsError || tradesError,
  };
};
