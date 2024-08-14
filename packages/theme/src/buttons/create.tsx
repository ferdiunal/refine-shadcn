import { CreateButtonProps } from "@/types";
import { Button } from "@/ui/button";
import { useCreateButton } from "@refinedev/core";
import { SquarePlusIcon } from "lucide-react";
import type { FC } from "react";

export const CreateButton: FC<CreateButtonProps> = ({
    resource,
    hideText = false,
    accessControl,
    meta,
    onClick,
    children,
    ...props
}) => {
    const { hidden, disabled, label, title, LinkComponent, to } =
        useCreateButton({
            resource,
            accessControl,
            meta,
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
                icon={<SquarePlusIcon className="mr-2 w-4 h-4" />}
                {...props}
            >
                {!hideText && (children ?? label)}
            </Button>
        </LinkComponent>
    );
};

CreateButton.displayName = "CreateButton";
