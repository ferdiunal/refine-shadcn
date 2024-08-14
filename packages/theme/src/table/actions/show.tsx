import type { RowActionProps } from ".";
import { RowAction } from ".";
import { useGetShowUrl } from "@/hooks";

type ShowActionProps = RowActionProps & {
    row: any;
    resource: string;
    title: string;
};

export function ShowAction({
    row,
    resource,
    title,
    disabled,
    ...props
}: ShowActionProps) {
    const detail = useGetShowUrl(resource, row.id);

    return (
        <RowAction
            {...props}
            disabled={!detail.can || disabled}
            title={!detail?.can ? detail?.reason : title}
            to={detail.url}
        />
    );
}

ShowAction.displayName = "ShowAction";
