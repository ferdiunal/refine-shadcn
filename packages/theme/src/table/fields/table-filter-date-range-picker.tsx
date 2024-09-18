import { format } from "date-fns";
import { FilterIcon, FilterX } from "lucide-react";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

import type { TableFilterProps } from "..";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Button } from "@/ui/button";
import { Separator } from "@/ui/separator";
import { Badge } from "@/ui/badge";
import { Calendar } from "@/ui/calendar";
import { BaseRecord, useTranslate } from "@refinedev/core";

export function TableFilterDateRangePickerFilter<
    T extends BaseRecord = BaseRecord,
>({
    column,
    title,
    numberOfMonths = 2,
    align = "start",
}: Pick<TableFilterProps<T>, "column" | "title" | "numberOfMonths" | "align">) {
    const t = useTranslate();
    const [date, setDate] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined,
    });
    const selectedValues = new Set(column?.getFilterValue() as string[]);

    useEffect(() => {
        if (date) {
            const dates = Object.values(date).filter(Boolean);
            if (dates.length) {
                column?.setFilterValue(
                    dates.map((date: Date | undefined) =>
                        date ? format(date, "yyyy-MM-dd").toString() : "",
                    ),
                );
            }
        }
    }, [column, date]);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="inline-flex flex-row items-center gap-x-0.5">
                    <Button
                        title={title}
                        variant="outline"
                        size="sm"
                        className="h-5 border-dashed px-1 py-2.5"
                    >
                        <FilterIcon className={cn("h-3.5 w-3.5")} />
                        {date?.from ? (
                            <>
                                <Separator
                                    orientation="vertical"
                                    className="mx-2 h-4"
                                />
                                <Badge
                                    variant="secondary"
                                    className="rounded-sm p-1 h-3.5 text-xs font-normal"
                                >
                                    {date.to ? (
                                        <>
                                            {[
                                                format(date.from, "LLL dd, y"),
                                                format(date.to, "LLL dd, y"),
                                            ].join(" ")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )}
                                </Badge>
                            </>
                        ) : null}
                    </Button>
                    {selectedValues.size > 0 && (
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-5 border-dashed px-1 py-2.5"
                            onClick={(e) => {
                                e.preventDefault();
                                column?.setFilterValue(undefined);
                                setDate({ from: undefined, to: undefined });
                            }}
                        >
                            <FilterX className={cn("h-3.5 w-3.5")} />
                        </Button>
                    )}
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align={align}>
                <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={new Date()}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={numberOfMonths}
                />
                {selectedValues.size > 0 && (
                    <>
                        <Separator />
                        <div className="flex flex-row items-center justify-center py-3">
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 border-dashed px-2"
                                onClick={() => {
                                    column?.setFilterValue(undefined);
                                    setDate({ from: undefined, to: undefined });
                                }}
                            >
                                <FilterX size={16} className="mr-2" />
                                {t("Clear")}
                            </Button>
                        </div>
                    </>
                )}
            </PopoverContent>
        </Popover>
    );
}
