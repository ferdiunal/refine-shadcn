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

import { BaseRecord, HttpError } from "@refinedev/core";
import { UseTableReturnType } from "@refinedev/react-table";

import { FC, forwardRef, PropsWithChildren } from "react";

type CheckAllProps = React.ComponentPropsWithoutRef<typeof Checkbox> &
    PropsWithChildren<{
        table: UseTableReturnType<BaseRecord, HttpError>;
    }>;

export const CheckAll: FC<CheckAllProps> = forwardRef<
    React.ElementRef<typeof Checkbox>,
    CheckAllProps
>(({ table, children }, ref) => {
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
                aria-label="Select all"
            />
            {children && (
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
                        <DropdownMenuLabel>Bulk Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {children}
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </>
    );
});

CheckAll.displayName = "CheckAll";
