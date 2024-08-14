import { useDeleteHelper } from "@/hooks";
import { DeleteContext } from "@/providers";
import { useContext } from "react";
import type { RowActionProps } from ".";
import { RowAction } from ".";

type DeleteActionProps = RowActionProps & {
    row: any;
    resource: string;
    title: string;
    onAfterHandle?: () => void;
};

export function DeleteAction({
    row,
    resource,
    title,
    disabled,
    onAfterHandle,
    ...props
}: DeleteActionProps) {
    const { can, reason } = useDeleteHelper(resource, row.id);
    const deleteContext = useContext(DeleteContext);

    return (
        <RowAction
            {...props}
            disabled={!can || disabled}
            title={!can ? reason : title}
            onClick={() =>
                deleteContext?.updateData({
                    row,
                    resource,
                    toogle: true,
                    onAfterHandle,
                })
            }
        />
    );
}

DeleteAction.displayName = "DeleteAction";
