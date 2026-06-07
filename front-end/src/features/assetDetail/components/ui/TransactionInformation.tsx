import { formatNumber, formatValue, PRICE_ROWS } from "@/constants";
import { useTrades } from "@/features/trades/hooks";
import {
  clearSelectedTrade,
  setSelectedTrade,
} from "@/store/slices/selectedTradeSlice";
import type { RootState } from "@/store/store";
import { useEffect, useMemo } from "react";
import { InfoSkeleton } from "./Skeleton";
import { transactionStyles as styles } from "./styles";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getTranslate } from "@/messages";

const TransactionInformation = ({ id }: { id: string }) => {
  const translate = getTranslate();
  const dispatch = useAppDispatch();

  const selectedTrade = useAppSelector(
    (state: RootState) => state.selectedTrade.tradeData,
  );
  const { data: allTrades = [], isLoading: tradesLoading } = useTrades();

  const isSelectedTradeValid = useMemo(
    () => selectedTrade?.entity?.id === id,
    [selectedTrade?.entity?.id, id],
  );

  useEffect(() => {
    if (isSelectedTradeValid) return;
    if (!id || !allTrades.length) {
      dispatch(clearSelectedTrade());
      return;
    }
    const foundTrade = allTrades.find((trade) => trade.entity?.id === id);
    dispatch(foundTrade ? setSelectedTrade(foundTrade) : clearSelectedTrade());
  }, [allTrades, id, isSelectedTradeValid, dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>{translate.Transaction}</h3>
      </div>
      <div className={styles.container}>
        {tradesLoading ? (
          <InfoSkeleton />
        ) : selectedTrade ? (
          <div className={styles.dataWrapper}>
            {PRICE_ROWS.map(({ label, key }) => (
              <div key={label} className={styles.row}>
                <p className={styles.label}>{label}:</p>
                <p className={styles.value}>
                  {selectedTrade.value[key]
                    ? formatNumber(selectedTrade.value[key])
                    : "---"}
                </p>
              </div>
            ))}
            <div className={styles.row}>
              <p className={styles.label}>{translate.volume}:</p>
              <p className={styles.value} dir="ltr">
                {formatValue(selectedTrade.value.volume)}
              </p>
            </div>
            <div className={styles.row}>
              <p className={styles.label}>{translate.value}:</p>
              <p className={styles.value} dir="ltr">
                {formatValue(selectedTrade.value.value)}
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>{translate.priceInformation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionInformation;
