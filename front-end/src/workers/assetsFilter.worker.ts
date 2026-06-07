import type { ListItem } from "@/types";

self.onmessage = (
  event: MessageEvent<{
    assets: ListItem[];
    query: string;
  }>,
) => {
  const { assets, query } = event.data;

  const q = query.trim().toLowerCase();

  if (!q) {
    postMessage(assets);
    return;
  }

  const filtered = assets.filter((item) => {
    const shortTitle = item.value?.short_title ?? "";
    const tradeSymbol = item.value?.trade_symbol ?? "";

    return (
      shortTitle.toLowerCase().includes(q) ||
      tradeSymbol.toLowerCase().includes(q)
    );
  });

  postMessage(filtered);
};
