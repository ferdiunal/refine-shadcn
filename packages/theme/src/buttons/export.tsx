import { ExportButtonProps } from "@/types";
import { Button } from "@/ui/button";
import { Slot } from "@radix-ui/react-slot";
import { CanAccess, useExportButton } from "@refinedev/core";
import { ShareIcon } from "lucide-react";

import type { FC } from "react";

export const ExportButton: FC<ExportButtonProps> = ({
    hideText = false,
    resource,
    recordItemId,
    accessControl,
    access,
    children,
    ...props
}) => {
    const { label } = useExportButton();
    const Com = !accessControl?.enabled ? Slot : CanAccess;

    if (accessControl?.hideIfUnauthorized && accessControl.enabled) {
        return null;
    }

    return (
        <Com
            params={{
                id: recordItemId,
            }}
            resource={resource}
            action="export"
            {...access}
        >
            <Button icon={<ShareIcon className="mr-2 w-4 h-4" />} {...props}>
                {!hideText && (children ?? label)}
            </Button>
        </Com>
    );
};

ExportButton.displayName = "ExportButton";
