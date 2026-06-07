// Table.tsx
export const tableStyles = {
  wrapper: `
    w-full
    bg-transparent
    overflow-auto
    h-[calc(100vh-130px)]
  `,

  table: `
    w-full
    text-[13px]
    text-gray-700
    border-collapse table-auto
  `,

  thead: `
    sticky top-0 z-10
    bg-white 
    shadow-sm
  `,

  th: `
    px-4 py-3
    font-bold
    text-gray-900
    text-center
    bg-white whitespace-nowrap
    border-b border-border-gray
  `,

  row: `
    bg-white overfull-hidden 
    border border-border-gray
    hover:bg-gray-300
    transition-colors duration-200 whitespace-nowrap
  `,

  td: `
    px-4 py-4
    text-center
    align-middle
    font-bold
    cursor-pointer
  `,

  emptyWrapper: `
    flex flex-col items-center justify-center
    py-20 text-gray-400
  `,

  emptyText: `
    text-gray-500 font-medium
  `,

  skeleton: `
  inline-block h-4 w-[50%] min-w-10 animate-pulse rounded bg-gray-200 align-middle
  `,
};

// TextInput.tsx
export const inputStyles = {
  wrapper: "w-full space-y-1",

  iconWrapper:
    "text-navy-600 pointer-events-none absolute top-1/2 right-2 -translate-y-1/2",

  label: `
    text-sm font-semibold
    text-gray-700 
    select-none
  `,

  base: `
    w-full
    bg-navy-600
    pr-12 h-10
    rounded-sm outline-none
    text-gray-100 
    placeholder:text-gray-100 
    placeholder:font-medium
    transition-all duration-200
  `,

  normal: `
    border-navy-600
    focus:ring-(--navy-400)
  `,

  error: `
    border-red-500
    focus:ring-red-400
  `,

  errorText: `
    text-xs
    text-red-500
    font-medium
    mt-1
  `,
};
