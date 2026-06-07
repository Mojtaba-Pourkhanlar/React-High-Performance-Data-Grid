import type { ListItem } from "@/types";
import { useEffect, useRef, useState } from "react";

export const useAssetsFilter = (assets: ListItem[], query: string) => {
  const [filtered, setFiltered] = useState<ListItem[]>(assets);

  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("../../workers/assetsFilter.worker.ts", import.meta.url),
      { type: "module" },
    );

    workerRef.current.onmessage = (e: MessageEvent<ListItem[]>) => {
      setFiltered(e.data);
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  useEffect(() => {
    if (!workerRef.current) return;

    workerRef.current.postMessage({
      assets,
      query,
    });
  }, [assets, query]);

  return filtered;
};
