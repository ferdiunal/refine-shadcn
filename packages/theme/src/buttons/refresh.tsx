import { RefreshButtonProps } from "@/types";
import { Button } from "@/ui/button";
import { useRefreshButton } from "@refinedev/core";
import { RefreshCwIcon } from "lucide-react";
import type { FC } from "react";

export const RefreshButton: FC<RefreshButtonProps> = ({
    resource,
    recordItemId,
    hideText = false,
    dataProviderName,
    children,
    ...props
}) => {
    const { onClick, label, loading } = useRefreshButton({
        resource,
        id: recordItemId,
        dataProviderName,
    });

    return (
        <Button
            onClick={onClick}
            loading={loading}
            icon={<RefreshCwIcon className="mr-2 w-4 h-4" />}
            {...props}
        >
            {!hideText && (children ?? label)}
        </Button>
    );
};

RefreshButton.displayName = "RefreshButton";
