import Loader from "@/components/loader";
import {
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Table as TableUi,
} from "@/ui/table";
import { PopoverContentProps } from "@radix-ui/react-popover";
import {
    BaseOption,
    BaseRecord,
    HttpError,
    useTranslate,
} from "@refinedev/core";
import {
    UseTableProps,
    UseTableReturnType,
    useTable,
} from "@refinedev/react-table";
import {
    CellContext,
    Column,
    ColumnDef,
    ColumnDefTemplate,
    TableOptionsResolved,
    flexRender,
} from "@tanstack/react-table";
import React, {
    FC,
    ReactElement,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { RowAction, RowActions } from "./actions";
import { EditAction } from "./actions/edit";
import { ShowAction } from "./actions/show";
import {
    TableFilterDateRangePickerFilter,
    TableFilterDropdown,
    TableFilterSearchColumn,
} from "./fields";
import { CheckAll } from "./fields/checkall";
import { Pagination } from "./fields/pagination";
import { SortAction } from "./fields/sort";
import { DataTableToolbar } from "./toolbar";
import { DeleteAction } from "./actions/delete";
import { DeleteProvider } from "@/providers";

export type TableListFilterOption = BaseOption & {
    icon?: React.ComponentType<{ className?: string }>;
};

export type TableFilterProps<TData extends BaseRecord = BaseRecord> = {
    column: Column<TData>;
    title?: string;
    numberOfMonths?: number;
    align?: PopoverContentProps["align"];
    options?: TableListFilterOption[];
};

export type ColumnProps<
    TData extends BaseRecord = BaseRecord,
    TValue = unknown,
    TError extends HttpError = HttpError,
> = {
    id: string;
    accessorKey: string;
    enableSorting?: boolean;
    enableHiding?: boolean;
    header?:
        | string
        | FC<{
              table: UseTableReturnType<TData, TError>;
          }>;
    cell?: ColumnDefTemplate<CellContext<TData, TValue>>;
    children?: ReactElement;
    filter?: FC<TableFilterProps<TData>>;
};

type CustomColumnDef<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
> = ColumnDef<TData, TError> & Pick<ColumnProps<TData, TError>, "filter">;

export type TableProps<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
> = Partial<UseTableProps<TData, TError, TData>> & {
    children?: ReactElement<ColumnProps<TData, TError>>[];
    showHeader?: boolean;
};

export function Table<
    TQueryFnData extends BaseRecord = BaseRecord,
    TData extends BaseRecord = TQueryFnData,
    TError extends HttpError = HttpError,
>({
    children,
    showHeader = true,
    columns = [],
    ...props
}: TableProps<TData, TError>) {
    const t = useTranslate();
    const mapColumn = useCallback(
        ({
            id,
            accessorKey,
            header,
            enableSorting,
            enableHiding,
            filter,
            cell,
        }: ColumnProps<TData, TError>): ColumnDef<TData> => {
            const column: any = {
                id,
                header,
                accessorKey,
                enableSorting: enableSorting ?? false,
                enableHiding: enableHiding ?? false,
                enableColumnFilter: true,
                enableResizing: true,
                filter,
            };

            if (cell) {
                column["cell"] = cell;
            }

            return column;
        },
        [],
    );

    columns = useMemo<ColumnDef<TData>[]>(() => {
        if (Array.isArray(children)) {
            return (children as ReactElement[])
                .map((value: ReactElement) => value.props)
                .map(mapColumn);
        }

        return [];
    }, [children, mapColumn]);

    const table = useTable({
        columns,
        ...props,
    });

    const tableOptions = useMemo<TableOptionsResolved<TData>>(
        () => table.options,
        [table],
    );

    const isFilterable = useMemo<boolean>(
        () =>
            Boolean(
                tableOptions.enableColumnFilters || tableOptions?.enableFilters,
            ),
        [tableOptions],
    );

    return (
        <DeleteProvider>
            <div className="space-y-4">
                <DataTableToolbar table={table} />
                <div className="rounded-md border border-border">
                    <TableUi>
                        {showHeader && (
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            const columnDef = header.column
                                                .columnDef as CustomColumnDef<
                                                TData,
                                                TError
                                            >;
                                            return (
                                                <TableHead key={header.id}>
                                                    <div className="inline-flex flex-row items-center gap-x-2.5">
                                                        {header.isPlaceholder
                                                            ? null
                                                            : flexRender(
                                                                  header.column
                                                                      .columnDef
                                                                      .header,
                                                                  header.getContext(),
                                                              )}
                                                        {tableOptions.enableSorting &&
                                                            columnDef.enableSorting && (
                                                                <SortAction
                                                                    column={
                                                                        header.column
                                                                    }
                                                                />
                                                            )}
                                                        {isFilterable &&
                                                            columnDef?.filter &&
                                                            columnDef.filter({
                                                                column: header.column,
                                                                title: `${columnDef.header} Filter`,
                                                            })}
                                                    </div>
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                        )}
                        <TableBody>
                            {table.refineCore.tableQuery.isLoading ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center text-nowrap"
                                    >
                                        <div className="flex items-center justify-center flex-row">
                                            <Loader className="h-4 text-primary" />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row: any) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={
                                            row.getIsSelected() && "selected"
                                        }
                                    >
                                        {row
                                            .getVisibleCells()
                                            .map((cell: any) => (
                                                <TableCell
                                                    key={cell.id}
                                                    className="text-nowrap"
                                                >
                                                    {flexRender(
                                                        cell.column.columnDef
                                                            .cell,
                                                        cell.getContext(),
                                                    )}
                                                </TableCell>
                                            ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        {t("No results")}.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </TableUi>
                </div>
                <Pagination table={table} />
            </div>
        </DeleteProvider>
    );
}

const TableColumn = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
>(
    props: ColumnProps<TData, TError>,
) => {
    return props.children;
};

Table.Column = TableColumn;
Table.CheckAll = CheckAll;
Table.Actions = RowActions;
Table.Action = RowAction;
Table.EditAction = EditAction;
Table.ShowAction = ShowAction;
Table.DeleteAction = DeleteAction;
Table.Filter = {
    DateRangePicker: TableFilterDateRangePickerFilter,
    Dropdown: TableFilterDropdown,
    Search: TableFilterSearchColumn,
};

Table.displayName = "Table";
