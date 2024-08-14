import { ImportButtonProps } from "@/types";
import { Button } from "@/ui/button";
import { Slot } from "@radix-ui/react-slot";
import { CanAccess, useImportButton } from "@refinedev/core";
import { ImportIcon } from "lucide-react";
import type { FC } from "react";

export const ImportButton: FC<ImportButtonProps> = ({
    hideText = false,
    resource,
    onChange,
    accept = "image/*,application/*",
    recordItemId,
    accessControl,
    access,
    children,
    ...props
}) => {
    const { label } = useImportButton();
    const Com = !accessControl?.enabled ? Slot : CanAccess;

    const onClick = () => {
        const el = document.createElement("input");
        el.type = "file";
        el.accept = accept;
        el.onchange = (e) => {
            if (e.target instanceof HTMLInputElement) {
                onChange(Array.from(e.target.files ?? []));
                el.remove();
            }
        };
        el.click();
    };

    if (accessControl?.hideIfUnauthorized && accessControl.enabled) {
        return null;
    }

    return (
        <Com
            params={{
                id: recordItemId,
            }}
            resource={resource}
            action="import"
            {...access}
        >
            <Button
                onClick={onClick}
                icon={<ImportIcon className="mr-2 w-4 h-4" />}
                {...props}
            >
                {!hideText && (children ?? label)}
            </Button>
        </Com>
    );
};

ImportButton.displayName = "ImportButton";
