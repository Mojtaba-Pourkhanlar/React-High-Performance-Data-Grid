import { useAssetsFilter } from "@/features/assets/useAssetsFilter";
import { useAssetsWithPrice } from "@/features/assets/useAssetsWithPrice";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppSelector } from "@/store/hooks";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import AssetsTable from "./AssetsTable";

const AssetsListComponent = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const search = useAppSelector((state) => state.search.query);
  const debouncedSearch = useDebounce(search, 500);

  const { data: assetsWithPrice = [], isLoading } = useAssetsWithPrice();
  const filteredAssets = useAssetsFilter(assetsWithPrice, debouncedSearch);

  const rowVirtualizer = useVirtualizer({
    count: filteredAssets.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48,
    overscan: 15,
  });

  return (
    <AssetsTable
      data={filteredAssets}
      virtual={{ parentRef, rowVirtualizer }}
      isLoading={isLoading}
    />
  );
};

export default AssetsListComponent;
