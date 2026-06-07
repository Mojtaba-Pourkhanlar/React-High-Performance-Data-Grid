import { formatNumber } from "@/constants";
import { useAssetDetail } from "@/features/assetDetail/hooks";
import { getTranslate } from "@/messages";
import { useAppSelector } from "@/store/hooks";
import type { RootState } from "@/store/store";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ id }: { id: string }) => {
  const translate = getTranslate();
  const navigate = useNavigate();
  const { data: assetDetail } = useAssetDetail(id || "");

  const selectedTrade = useAppSelector(
    (state: RootState) => state.selectedTrade.tradeData,
  );
  const handleBackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const result = assetDetail?.data[0]?.value;

  return (
    <div className="mb-4">
      <nav className="flex items-center gap-1 text-sm text-gray-500">
        <button
          onClick={handleBackClick}
          className="cursor-pointer font-bold text-blue-400 select-none"
        >
          {translate.assetsList}
        </button>
        <span className="text-gray-300">/</span>
        <span className="font-bold text-blue-400 select-none">
          {translate.symbol} {result?.trade_symbol ?? "---"}
        </span>
      </nav>

      {!result ? (
        <div className="border-border-gray mt-3 rounded-sm border bg-white p-4">
          <p className="p-6 text-gray-400">{translate.notAssets}</p>
        </div>
      ) : (
        <div className="border-border-gray mt-3 rounded-sm border bg-white p-4">
          <div className="flex items-center gap-5">
            <p className="font-semibold text-blue-500">{result.trade_symbol}</p>
            <p className="font-semibold">
              {selectedTrade?.value?.close_price
                ? formatNumber(selectedTrade.value.close_price)
                : "---"}
            </p>
          </div>
          <p className="pt-3 text-sm text-gray-400">{result.short_title}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
