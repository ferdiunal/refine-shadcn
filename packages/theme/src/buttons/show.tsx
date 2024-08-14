import { ShowButtonProps } from "@/types";
import { Button } from "@/ui/button";
import { useShowButton } from "@refinedev/core";
import { EyeIcon } from "lucide-react";
import type { FC } from "react";

export const ShowButton: FC<ShowButtonProps> = ({
    resource: resourceNameFromProps,
    recordItemId,
    hideText = false,
    accessControl,
    meta,
    children,
    onClick,
    ...props
}) => {
    const { to, label, title, hidden, disabled, LinkComponent } = useShowButton(
        {
            resource: resourceNameFromProps,
            id: recordItemId,
            accessControl,
            meta,
        },
    );

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
                icon={<EyeIcon className="mr-2 w-4 h-4" />}
                title={title}
                disabled={disabled}
                {...props}
            >
                {!hideText && (children ?? label)}
            </Button>
        </LinkComponent>
    );
};

ShowButton.displayName = "ShowButton";
