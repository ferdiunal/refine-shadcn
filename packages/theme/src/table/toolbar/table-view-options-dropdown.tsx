"use client";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/ui/dropdown-menu";
import { FC, useMemo } from "react";
import { useTranslate } from "@refinedev/core";

interface DataTableViewOptionsProps<TData> {
    table: Table<TData>;
}

export const DataTableViewOptions = <TData,>({
    table,
}: DataTableViewOptionsProps<TData>): ReturnType<
    FC<DataTableViewOptionsProps<TData>>
> => {
    const t = useTranslate();
    const columns = useMemo(() => {
        return table
            .getAllColumns()
            .filter(
                (column) =>
                    typeof column.accessorFn !== "undefined" &&
                    column.getCanHide(),
            );
    }, [table]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex"
                >
                    <MixerHorizontalIcon className="mr-2 h-4 w-4" />
                    {t("Columns")}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>{t("Toggle columns")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {columns.map((column) => {
                    return (
                        <DropdownMenuCheckboxItem
                            key={column.id}
                            className="capitalize"
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) =>
                                column.toggleVisibility(value)
                            }
                        >
                            {column?.columnDef?.header?.toString() ||
                                t(column.id)}
                        </DropdownMenuCheckboxItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

DataTableViewOptions.displayName = "DataTableViewOptions";
