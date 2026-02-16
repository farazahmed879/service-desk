"use client";

import React from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";

// ─── Types ───────────────────────────────────────────────────────────

export interface Column<T> {
    /** Column header label */
    header: string;
    /** Key on the data object to read the value from */
    accessorKey?: keyof T;
    /** Custom render function – overrides accessorKey */
    cell?: (row: T, index: number) => React.ReactNode;
    /** Whether this column is sortable */
    sortable?: boolean;
    /** Sort key – defaults to accessorKey. Required when using cell + sortable */
    sortKey?: string;
    /** Extra className applied to every <td> in this column */
    className?: string;
    /** Extra className applied to the <th> */
    headerClassName?: string;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface SortingProps {
    sortColumn: string | null;
    sortDirection: "asc" | "desc" | null;
    onSort: (column: string) => void;
}

export interface DataTableProps<T> {
    /** Array of data items */
    data: T[];
    /** Column definitions */
    columns: Column<T>[];
    /** Pagination state & handlers (controlled by parent) */
    pagination?: PaginationProps;
    /** Sorting state & handlers (controlled by parent) */
    sorting?: SortingProps;
    /** Show a loading skeleton */
    isLoading?: boolean;
    /** Message when data is empty */
    emptyMessage?: string;
    /** Unique key extractor for each row */
    rowKey?: (row: T, index: number) => string | number;
}

// ─── Sort indicator icon ─────────────────────────────────────────────

function SortIcon({
    direction,
    active,
}: {
    direction: "asc" | "desc" | null;
    active: boolean;
}) {
    return (
        <span className="ml-1.5 inline-flex flex-col leading-none">
            <svg
                className={`h-2.5 w-2.5 ${active && direction === "asc"
                        ? "text-primary"
                        : "text-gray-400 dark:text-gray-600"
                    }`}
                viewBox="0 0 10 6"
                fill="currentColor"
            >
                <path d="M5 0L10 6H0L5 0Z" />
            </svg>
            <svg
                className={`h-2.5 w-2.5 ${active && direction === "desc"
                        ? "text-primary"
                        : "text-gray-400 dark:text-gray-600"
                    }`}
                viewBox="0 0 10 6"
                fill="currentColor"
            >
                <path d="M5 6L0 0H10L5 6Z" />
            </svg>
        </span>
    );
}

// ─── Pagination controls ─────────────────────────────────────────────

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    /** Build the page number buttons with ellipsis */
    const getPageNumbers = () => {
        const pages: (number | "...")[] = [];
        const delta = 1; // pages around current

        // always show first
        pages.push(1);

        const start = Math.max(2, currentPage - delta);
        const end = Math.min(totalPages - 1, currentPage + delta);

        if (start > 2) pages.push("...");
        for (let i = start; i <= end; i++) pages.push(i);
        if (end < totalPages - 1) pages.push("...");

        // always show last
        if (totalPages > 1) pages.push(totalPages);

        return pages;
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 px-2 py-4 dark:border-gray-700">
            {/* Info */}
            <span className="text-sm text-gray-500 dark:text-gray-400">
                Page <span className="font-semibold text-dark dark:text-white">{currentPage}</span> of{" "}
                <span className="font-semibold text-dark dark:text-white">{totalPages}</span>
            </span>

            {/* Controls */}
            <div className="flex items-center gap-1">
                {/* Prev */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-dark-2"
                    aria-label="Previous page"
                >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Page numbers */}
                {getPageNumbers().map((page, idx) =>
                    page === "..." ? (
                        <span key={`ellipsis-${idx}`} className="inline-flex h-8 w-8 items-center justify-center text-sm text-gray-400">
                            …
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors ${page === currentPage
                                    ? "bg-primary text-white"
                                    : "text-dark hover:bg-gray-100 dark:text-white dark:hover:bg-dark-2"
                                }`}
                        >
                            {page}
                        </button>
                    ),
                )}

                {/* Next */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-dark-2"
                    aria-label="Next page"
                >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

// ─── Loading skeleton ────────────────────────────────────────────────

function SkeletonRows({ columns, rows = 5 }: { columns: number; rows?: number }) {
    return (
        <>
            {Array.from({ length: rows }).map((_, rowIdx) => (
                <TableRow key={rowIdx}>
                    {Array.from({ length: columns }).map((_, colIdx) => (
                        <TableCell key={colIdx}>
                            <div className="h-4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    );
}

// ─── DataTable ───────────────────────────────────────────────────────

export default function DataTable<T>({
    data,
    columns,
    pagination,
    sorting,
    isLoading = false,
    emptyMessage = "No data found",
    rowKey,
}: DataTableProps<T>) {
    const handleSort = (col: Column<T>) => {
        if (!sorting || !col.sortable) return;
        const key = col.sortKey ?? (col.accessorKey as string);
        if (key) sorting.onSort(key);
    };

    return (
        <div className="w-full">
            <Table>
                {/* ── Header ── */}
                <TableHeader>
                    <TableRow className="border-none uppercase text-dark dark:text-white">
                        {columns.map((col, idx) => {
                            const isSortable = col.sortable && sorting;
                            const sortKey = col.sortKey ?? (col.accessorKey as string);
                            const isActive = sorting?.sortColumn === sortKey;

                            return (
                                <TableHead
                                    key={idx}
                                    className={`${col.headerClassName ?? ""} ${isSortable ? "cursor-pointer select-none" : ""
                                        }`}
                                    onClick={() => isSortable && handleSort(col)}
                                >
                                    <span className="inline-flex items-center">
                                        {col.header}
                                        {isSortable && (
                                            <SortIcon
                                                direction={isActive ? sorting!.sortDirection : null}
                                                active={!!isActive}
                                            />
                                        )}
                                    </span>
                                </TableHead>
                            );
                        })}
                    </TableRow>
                </TableHeader>

                {/* ── Body ── */}
                <TableBody>
                    {isLoading ? (
                        <SkeletonRows columns={columns.length} />
                    ) : data.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="py-8 text-center text-gray-500 dark:text-gray-400"
                            >
                                {emptyMessage}
                            </TableCell>
                        </TableRow>
                    ) : (
                        data.map((row, rowIdx) => (
                            <TableRow
                                key={rowKey ? rowKey(row, rowIdx) : rowIdx}
                                className="border-b border-gray-200 text-base font-medium text-dark hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                            >
                                {columns.map((col, colIdx) => (
                                    <TableCell key={colIdx} className={col.className}>
                                        {col.cell
                                            ? col.cell(row, rowIdx)
                                            : col.accessorKey
                                                ? String((row as Record<string, unknown>)[col.accessorKey as string] ?? "")
                                                : null}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>

            {/* ── Pagination ── */}
            {pagination && <Pagination {...pagination} />}
        </div>
    );
}
