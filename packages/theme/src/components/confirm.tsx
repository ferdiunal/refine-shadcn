import type { ConfirmDialogProps } from "@/types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/ui/alert-dialog";
import { LoadingIcon } from "@/ui/loading";
import { CheckIcon, XIcon } from "lucide-react";
import { FC, isValidElement, useMemo } from "react";

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
    children,
    title = "Are you sure?",
    description = "This action cannot be undone.",
    okText = "Ok",
    cancelText = "Cancel",
    okButtonSize = "default",
    cancelButtonSize = "default",
    okButtonVariant = "default",
    cancelButtonVariant = "outline",
    loading = false,
    okIconSide = "left",
    cancelIconSide = "left",
    onConfirm,
    okIcon,
    cancelIcon,
    open,
    onOpenChange,
    defaultOpen,
}) => {
    const CancelIcon = useMemo(() => {
        if (isValidElement(cancelIcon)) {
            return cancelIcon;
        }

        return <XIcon className="mr-2 h-4 w-4" />;
    }, [cancelIcon]);

    const OkIcon = useMemo(() => {
        if (loading) {
            return <LoadingIcon className="mr-2" />;
        }
        if (isValidElement(okIcon)) {
            return okIcon;
        }

        return <CheckIcon className="mr-2 h-4 w-4" />;
    }, [okIcon, loading]);

    return (
        <AlertDialog
            open={open}
            onOpenChange={onOpenChange}
            defaultOpen={defaultOpen}
        >
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        variant={cancelButtonVariant}
                        size={cancelButtonSize}
                        disabled={loading}
                    >
                        {cancelIconSide === "left" && CancelIcon}
                        {cancelText}
                        {cancelIconSide === "right" && CancelIcon}
                    </AlertDialogCancel>
                    <AlertDialogAction
                        variant={okButtonVariant}
                        size={okButtonSize}
                        disabled={loading}
                        onClick={onConfirm}
                    >
                        {okIconSide === "left" && OkIcon}
                        {okText}
                        {okIconSide === "right" && OkIcon}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

ConfirmDialog.displayName = "ConfirmDialog";
