import { useOrderBook } from "@/features/orderBook/hooks";
import { useMemo } from "react";
import { OrderBookSkeleton } from "./Skeleton";
import { orderStyles as styles } from "./styles";
import { formatNumber } from "@/constants";
import { getTranslate } from "@/messages";

const OrderBookTable = ({ id }: { id: string }) => {
  const translate = getTranslate();
  const { data: orderBookList = [], isLoading: orderBookLoading } =
    useOrderBook();

  const currentOrderBook = useMemo(() => {
    if (!id || !orderBookList.length) return null;
    const found = orderBookList.find((item) => item.entity?.id === id);
    return found?.value?.orders?.length ? found : null;
  }, [id, orderBookList]);

  const sortedOrders = useMemo(() => {
    if (!currentOrderBook) return [];
    return [...currentOrderBook.value.orders].sort(
      (a, b) => a.order_rank - b.order_rank,
    );
  }, [currentOrderBook]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>{translate.supply}</h3>
      </div>
      <div className={styles.tableContainer}>
        {orderBookLoading ? (
          <div className={styles.skeletonWrapper}>
            <OrderBookSkeleton />
          </div>
        ) : sortedOrders.length > 0 ? (
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.thRight}>{translate.order}</th>
                <th className={styles.th}>{translate.quantity}</th>
                <th className={styles.th}>{translate.buy}</th>
                <th className={styles.th}>{translate.sell}</th>
                <th className={styles.th}>{translate.quantity}</th>
                <th className={styles.thLeft}>{translate.order}</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {sortedOrders.map((order, idx) => (
                <tr key={idx} className={styles.tr}>
                  <td className={styles.tdBidFirst}>
                    {formatNumber(order.bid_count)}
                  </td>
                  <td className={styles.tdBid}>
                    {formatNumber(order.bid_volume)}
                  </td>
                  <td className={styles.tdBid}>
                    {formatNumber(order.bid_price)}
                  </td>
                  <td className={styles.tdAsk}>
                    {formatNumber(order.ask_price)}
                  </td>
                  <td className={styles.tdAsk}>
                    {formatNumber(order.ask_volume)}
                  </td>
                  <td className={styles.tdAskLast}>
                    {formatNumber(order.ask_count)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>{translate.notOrder}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderBookTable;
