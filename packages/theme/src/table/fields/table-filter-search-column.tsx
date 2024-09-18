import { FilterIcon, FilterX } from "lucide-react";
import type { TableFilterProps } from "..";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Input } from "@/ui/input";
import { Separator } from "@/ui/separator";
import { useTranslate } from "@refinedev/core";

export function TableFilterSearchColumn({
    column,
    title,
    align = "start",
}: TableFilterProps) {
    const selectedValue = column?.getFilterValue() as string;
    const t = useTranslate();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="inline-flex flex-row items-center gap-x-0.5">
                    {selectedValue ? (
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-5 border-dashed px-1 py-2.5"
                            onClick={(e) => {
                                e.preventDefault();
                                column?.setFilterValue(undefined);
                            }}
                        >
                            <FilterX className={cn("h-3.5 w-3.5")} />
                        </Button>
                    ) : (
                        <Button
                            title={title}
                            variant="outline"
                            size="sm"
                            className="h-4 border-dashed px-1 py-2.5"
                        >
                            <FilterIcon className={cn("h-3.5 w-3.5")} />
                        </Button>
                    )}
                </div>
            </PopoverTrigger>
            <PopoverContent
                className="w-[200px] p-0 overflow-hidden border-0 ring-0"
                align={align}
            >
                <div className="relative">
                    <div className="flex flex-row items-center px-3 text-popover-foreground bg-popover">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-4 w-4 shrink-0 opacity-50"
                        >
                            <path
                                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <Input
                            defaultValue={selectedValue ?? ""}
                            onChange={(e) => {
                                column?.setFilterValue(e.target.value);
                            }}
                            className={cn(
                                "h-10 border-0 focus-visible:ring-0 ring-0 rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground shadow-none disabled:cursor-not-allowed disabled:opacity-50",
                            )}
                            placeholder={title}
                        />
                    </div>
                    {selectedValue && (
                        <>
                            <Separator />
                            <div className="flex flex-row items-center justify-center py-3">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 border-dashed px-2"
                                    onClick={() => {
                                        column?.setFilterValue(undefined);
                                    }}
                                >
                                    <FilterX size={16} className="mr-2" />
                                    {t("Clear")}
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    );
}
