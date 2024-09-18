import { Button } from "@/ui/button";
import { Checkbox } from "@/ui/checkbox";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

import { BaseRecord, HttpError, useTranslate } from "@refinedev/core";
import { UseTableReturnType } from "@refinedev/react-table";

import { FC, forwardRef, PropsWithChildren } from "react";

type CheckAllProps = React.ComponentPropsWithoutRef<typeof Checkbox> &
    PropsWithChildren<{
        table: UseTableReturnType<BaseRecord, HttpError>;
        options?: {
            label: string;
            onClick: () => void;
        }[];
    }>;

export const CheckAll: FC<CheckAllProps> = forwardRef<
    React.ElementRef<typeof Checkbox>,
    CheckAllProps
>(({ table, children, options }, ref) => {
    const t = useTranslate();
    return (
        <>
            <Checkbox
                ref={ref}
                checked={
                    table.getIsSomeRowsSelected()
                        ? "indeterminate"
                        : table.getIsAllPageRowsSelected()
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                className="translate-y-[2px]"
                aria-label={t("Select all")}
            />
            {children ||
                (Array.isArray(options) && options.length && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                disabled={
                                    !(
                                        table.getIsSomeRowsSelected() ||
                                        table.getIsAllPageRowsSelected()
                                    )
                                }
                                size={"icon"}
                                variant={"ghost"}
                                className="px-0 w-5"
                            >
                                <DotsVerticalIcon className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuLabel>
                                {t("Bulk Actions")}
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {!children &&
                            Array.isArray(options) &&
                            options?.length > 0
                                ? options.map((option, key) => (
                                      <DropdownMenuItem
                                          key={key}
                                          onSelect={option.onClick}
                                      >
                                          {option.label}
                                      </DropdownMenuItem>
                                  ))
                                : children}
                        </DropdownMenuContent>
                    </DropdownMenu>
                ))}
        </>
    );
});

CheckAll.displayName = "CheckAll";
