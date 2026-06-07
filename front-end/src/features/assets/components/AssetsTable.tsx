import Table from "@/components/core/Table";
import type { ColumnTable } from "@/components/core/types";
import { formatNumber } from "@/constants";
import { getTranslate } from "@/messages";
import { useAppDispatch } from "@/store/hooks";
import { setSelectedTrade } from "@/store/slices/selectedTradeSlice";
import type {
  AssetsTableProps,
  AssetsTableRowData,
  AssetWithTrade,
} from "@/types";
import { useNavigate } from "react-router-dom";

const AssetsTable = ({ data, virtual, isLoading }: AssetsTableProps) => {
  const translate = getTranslate();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const columns: ColumnTable<AssetsTableRowData>[] = [
    {
      key: "trade_symbol",
      header: translate.symbolName,
      render: (item) => (
        <p className="text-blue-500" title={item.value.trade_symbol}>
          {item.value.trade_symbol ?? "---"}
        </p>
      ),
    },
    {
      key: "short_title",
      header: translate.companyName,
      render: (item) => (
        <p title={item.value.short_title}>{item.value.short_title ?? "---"}</p>
      ),
    },
    {
      key: "close_price",
      header: translate.lastPrice,
      render: (item) => (
        <p>{item.closePrice ? formatNumber(+item.closePrice) : "---"}</p>
      ),
    },
    {
      key: "close_price",
      header: translate.transactionValue,
      render: (item) => (
        <p>
          {item.tradeDataValue ? formatNumber(+item.tradeDataValue) : "---"}
        </p>
      ),
    },
  ];

  const handleRowClick = (item: AssetWithTrade) => {
    const assetId = item.entity?.id;
    if (!assetId) return;
    if (item.tradeData) {
      dispatch(setSelectedTrade(item.tradeData));
    } else {
      dispatch(setSelectedTrade(null));
    }
    navigate(`/assets/${assetId}`);
  };

  return (
    <Table
      data={data}
      columns={columns}
      virtual={virtual}
      isLoading={isLoading}
      onClick={handleRowClick}
    />
  );
};

export default AssetsTable;
