import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import type { TableFilterProps } from "..";
import { cn } from "@/lib/utils";
import type { BaseRecord } from "@refinedev/core";

export const SortAction = <TData extends BaseRecord = BaseRecord>({
  column,
}: Pick<TableFilterProps<TData>, "column">) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        column?.toggleSorting(column?.getIsSorted() === "asc");
      }}
    >
      <div className="inline-flex flex-col">
        <CaretUpIcon
          className={cn(
            "-mb-1.5 w-5 h-5",
            column?.getIsSorted() === "asc" ? "text-foreground" : "text-input"
          )}
        />
        <CaretDownIcon
          className={cn(
            "-mt-1.5 w-5 h-5",
            column?.getIsSorted() === "desc" ? "text-foreground" : "text-input"
          )}
        />
      </div>
    </div>
  );
};
