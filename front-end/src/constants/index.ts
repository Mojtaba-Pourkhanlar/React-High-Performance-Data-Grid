export const PRICE_ROWS = [
  { label: "پایانی", key: "close_price" },
  { label: "بیشترین", key: "high_price" },
  { label: "کمترین", key: "low_price" },
  { label: "اولین", key: "open_price" },
  { label: "آخرین", key: "real_close_price" },
] as const;

export const formatNumber = (num: number) => {
  return num.toLocaleString("fa-IR");
};

export const formatValue = (num: number) => {
  if (!num) return "۰";
  const millions = Math.floor(num / 1_000_000);
  const decimal = Math.round((num % 1_000_000) / 10_000);
  return `${millions}/${decimal} M`;
};
