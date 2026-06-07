import { useMemo } from "react";
import type { TableProps } from "./types";
import { tableStyles as s } from "./core.styles";

export default function Table<T extends { id?: React.Key }>({
  data = [],
  columns,
  onClick,
  virtual,
  isLoading,
}: TableProps<T>) {
  const virtualRows = useMemo(() => {
    return virtual ? virtual?.rowVirtualizer.getVirtualItems() : [];
  }, [virtual]);

  const paddingTop = virtualRows.length ? virtualRows[0].start : 0;

  const paddingBottom = virtualRows.length
    ? (virtual?.rowVirtualizer?.getTotalSize() ?? 0) -
      virtualRows[virtualRows.length - 1].end
    : 0;

  const visibleData = useMemo(() => {
    if (!virtual?.rowVirtualizer) return data;
    return virtualRows.map((v) => data[v.index]);
  }, [data, virtualRows, virtual]);

  const skeletonRowsCount = 10;

  return (
    <div className={s.wrapper} ref={virtual?.parentRef}>
      <div>
        <table className={s.table} dir="rtl">
          <thead className={s.thead}>
            <tr>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className={`${s.th} ${col.width || ""}`}
                  style={{ textAlign: col.align || "start" }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr
              aria-hidden="true"
              className="border-border-gray! h-3 border-b"
            />

            {isLoading ? (
              Array.from({ length: skeletonRowsCount }).map((_, rowIndex) => (
                <tr
                  key={`skeleton-row-${rowIndex}`}
                  className={`${s.row} border-b border-gray-100`}
                >
                  {columns.map((col, colIndex) => (
                    <td
                      key={`skeleton-col-${colIndex}`}
                      className={`${s.td} py-4`}
                      style={{ textAlign: col.align || "start" }}
                    >
                      <div className={s.skeleton} />
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <>
                {virtual && paddingTop > 0 && (
                  <tr>
                    <td
                      colSpan={columns.length}
                      style={{ height: paddingTop }}
                    />
                  </tr>
                )}

                {visibleData.map((row, rowIndex) => (
                  <tr
                    key={row.id ?? rowIndex}
                    className={s.row}
                    onClick={() => onClick?.(row, rowIndex)}
                  >
                    {columns.map((col, colIndex) => (
                      <td
                        key={colIndex}
                        className={s.td}
                        style={{ textAlign: col.align || "start" }}
                      >
                        {col.render
                          ? col.render(row, rowIndex)
                          : col.key
                            ? (row[col.key as keyof T] as React.ReactNode)
                            : null}
                      </td>
                    ))}
                  </tr>
                ))}

                {virtual && paddingBottom > 0 && (
                  <tr>
                    <td
                      colSpan={columns.length}
                      style={{ height: paddingBottom }}
                    />
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
