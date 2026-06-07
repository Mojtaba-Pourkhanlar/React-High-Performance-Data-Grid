// OrderBookTable.tsx
export const orderStyles = {
  wrapper: "w-full lg:w-1/2",

  header: "border-border-gray mb-1 rounded-sm border bg-white px-4 py-3",
  headerTitle: "text-sm font-semibold text-gray-800",

  tableContainer:
    "border-border-gray h-69 max-h-69 overflow-auto rounded-sm border bg-white px-4 py-2",

  skeletonWrapper: "pt-4",

  table: "w-full table-auto border-collapse",
  thead: "sticky -top-2 z-10 bg-white",

  th: "border-border-gray border-b p-1 font-medium",
  thRight: "border-border-gray border-b p-1 text-right font-medium",
  thLeft: "border-border-gray border-b p-1 text-left font-medium",

  tbody: "divide-y divide-gray-200",
  tr: "hover:bg-gray-50",

  tdBid: "p-2.5 text-center text-sm text-green-600",
  tdBidFirst: "p-2.5 text-right text-green-600",
  tdAsk: "p-2.5 text-center text-sm text-red-600",
  tdAskLast: "p-2.5 text-left text-red-600",

  emptyState:
    "flex h-full flex-col items-center justify-center space-y-2 opacity-60",
  emptyText: "text-sm font-medium text-gray-500",
} as const;

// TransactionInformation.tsx
export const transactionStyles = {
  wrapper: "w-full lg:w-1/2",

  header: "border-border-gray mb-1 rounded-sm border bg-white px-4 py-3",
  headerTitle: "text-sm font-semibold text-gray-800",

  container:
    "border-border-gray grid h-69 max-h-69 grid-cols-1 divide-y divide-gray-200 rounded-sm border bg-white px-4 py-2",

  dataWrapper: "divide-y divide-gray-100 overflow-hidden",

  row: "flex items-center justify-between py-2",
  label: "text-sm font-medium text-gray-500",
  value: "text-sm font-bold text-gray-900",

  emptyState:
    "flex flex-col items-center justify-center space-y-2 py-10 opacity-60",
  emptyText: "text-sm text-gray-500",
} as const;
