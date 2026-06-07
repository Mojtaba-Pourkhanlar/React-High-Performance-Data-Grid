import type { Virtualizer } from "@tanstack/react-virtual";

interface BaseEntity {
  id: string;
  meta: {
    type: string;
  };
}

interface BaseMeta {
  version: number;
  state: "updated" | "created" | "deleted";
  insert_date_time: string;
  update_date_time: string;
  type: string;
}

// Assets List
interface ListValue {
  title: string;
  english_title: string;
  short_title: string;
  english_short_title: string;
  trade_symbol: string;
  english_trade_symbol: string;
}

export interface ListItem {
  entity: BaseEntity;
  type: "info";
  value: ListValue;
  id: string;
  meta: BaseMeta;
}

// Trades
interface Instrument {
  id: string;
  meta: {
    type: "exchange.instrument";
  };
}

export interface ClosePriceValue {
  start_date_time: string;
  end_date_time: string;
  instrument: Instrument;
  close_price: number;
  close_price_change: number;
  close_price_change_percent: number;
  real_close_price: number;
  real_close_price_change: number;
  real_close_price_change_percent: number;
  open_price: number;
  low_price: number;
  high_price: number;
  trade_count: number;
  buyer_count: number;
  volume: number;
  value: number;
  person_buyer_count: number;
  company_buyer_count: number;
  person_buy_volume: number;
  company_buy_volume: number;
  person_seller_count: number;
  company_seller_count: number;
  person_sell_volume: number;
  company_sell_volume: number;
  person_sell_value: number;
  company_sell_value: number;
  person_buy_value: number;
  company_buy_value: number;
  person_buy_to_sell_ratio: number;
  company_buy_to_sell_ratio: number;
  person_buy_to_company_buy_ratio: number;
  person_sell_to_company_sell_ratio: number;
  real_close_price_to_close_price_percent: number;
  open_price_to_real_close_price_percent: number;
  person_buy_per_head: number;
  company_buy_per_head: number;
  person_sell_per_head: number;
  company_sell_per_head: number;
  person_buy_power: number;
  company_buy_power: number;
}

export interface ClosePriceItem {
  entity: BaseEntity;
  type: "trade_d";
  value: ClosePriceValue;
  id: string;
  meta: BaseMeta;
}

// Assets:id
export interface ListDetailResponse {
  data: ListItem[];
}

// OrderList
export interface Order {
  order_rank: number;
  ask_count: number;
  ask_volume: number;
  ask_price: number;
  bid_count: number;
  bid_volume: number;
  bid_price: number;
}

export interface OrderListValue {
  start_date_time: string;
  end_date_time: string;
  instrument: Instrument;
  orders: Order[];
}

export interface OrderListItem {
  entity: BaseEntity;
  type: "bidask_d";
  value: OrderListValue;
  id: string;
  meta: BaseMeta;
}

// Core Types

export interface TableColumnProps {
  data: ListItem[];
  onRowClick?: (item: ListItem) => void;
}

export interface PriceCardProps {
  data: ClosePriceItem;
}

export interface OrderBookProps {
  data: OrderListItem;
  maxRows?: number;
}

export interface TradesResponse {
  data: ClosePriceItem[];
}

export type AssetsTableRowData = AssetWithTrade & {
  closePrice?: number | null;
};

export interface AssetsTableProps {
  data: AssetsTableRowData[];
  virtual?: {
    parentRef: React.RefObject<HTMLDivElement | null>;
    rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  };
  isLoading: boolean;
}

export interface AssetWithTrade extends ListItem {
  closePrice?: number | null;
  tradeDataValue?: number | null;
  tradeData?: ClosePriceItem | null;
}
