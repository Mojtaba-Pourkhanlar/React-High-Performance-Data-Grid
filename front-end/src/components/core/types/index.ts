import type { Virtualizer } from "@tanstack/react-virtual";
import type { InputHTMLAttributes, ReactNode } from "react";

// Table.tsx
export type ColumnTable<T> = {
  key?: string;
  header: React.ReactNode;
  render?: (row: T, index: number) => React.ReactNode;
  width?: string;
  align?: "start" | "center" | "end";
};

export type TableProps<T> = {
  data: T[];
  columns: ColumnTable<T>[];
  onClick?: (item: T, index: number) => void;
  isLoading: boolean;

  virtual?: {
    parentRef: React.RefObject<HTMLDivElement | null>;
    rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  };
};

// TextInput.tsx
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: boolean;
  errorText?: string;
  startIcon?: ReactNode;
}
