import { CloneButtonProps } from "@/types";
import { Button } from "@/ui/button";
import { useCloneButton } from "@refinedev/core";
import { CopyPlus } from "lucide-react";
import type { FC } from "react";

export const CloneButton: FC<CloneButtonProps> = ({
    resource,
    recordItemId,
    hideText = false,
    accessControl,
    meta,
    onClick,
    children,
    ...props
}) => {
    const { to, LinkComponent, label, disabled, hidden, title } =
        useCloneButton({
            id: recordItemId,
            resource: resource,
            accessControl: accessControl,
            meta: meta,
        });

    if (hidden) return null;

    return (
        <LinkComponent
            to={to}
            replace={false}
            onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
                if (disabled) {
                    e.preventDefault();
                    return;
                }
                if (onClick) {
                    e.preventDefault();
                    onClick(e);
                }
            }}
        >
            <Button
                disabled={disabled}
                title={title}
                icon={<CopyPlus className="mr-2 w-4 h-4" />}
                {...props}
            >
                {!hideText && (children ?? label)}
            </Button>
        </LinkComponent>
    );
};

CloneButton.displayName = "CloneButton";
