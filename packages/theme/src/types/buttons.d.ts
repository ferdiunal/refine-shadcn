import type { ButtonProps } from "@/ui/button";
import { CanAccess } from "@refinedev/core";
import {
    RefineButtonResourceProps,
    RefineButtonSingleProps,
    RefineCloneButtonProps,
    RefineCreateButtonProps,
    RefineDeleteButtonProps,
    RefineEditButtonProps,
    RefineExportButtonProps,
    RefineListButtonProps,
    RefineRefreshButtonProps,
    RefineSaveButtonProps,
    RefineShowButtonProps,
} from "@refinedev/ui-types";
import { ComponentProps } from "react";
import type { ConfirmDialogProps } from "./confirmDialog";

type CustomButtonProps<T> = ButtonProps & T;

export type ShowButtonProps = CustomButtonProps<RefineShowButtonProps>;

export type CreateButtonProps = CustomButtonProps<
    Pick<
        RefineCreateButtonProps,
        "resource" | "hideText" | "accessControl" | "meta" | "onClick"
    >
>;

export type DeleteButtonProps = CustomButtonProps<
    RefineDeleteButtonProps<{
        confirmDescription?: ConfirmDialogProps["description"];
    }>
>;

export type EditButtonProps = CustomButtonProps<RefineEditButtonProps>;

export type ListButtonProps = CustomButtonProps<RefineListButtonProps>;

export type SaveButtonProps = ButtonProps &
    RefineSaveButtonProps &
    RefineButtonResourceProps &
    RefineButtonSingleProps & {
        access?: Omit<
            React.ComponentProps<typeof CanAccess>,
            "children" | "action" | "resource" | "params"
        >;
    };

export type ExportButtonProps = ButtonProps &
    RefineExportButtonProps<
        RefineButtonResourceProps &
            RefineButtonSingleProps & {
                access: Omit<
                    ComponentProps<typeof CanAccess>,
                    "children" | "action" | "resource" | "params"
                >;
            }
    >;

export type RefreshButtonProps = CustomButtonProps<RefineRefreshButtonProps>;

export type CloneButtonProps = CustomButtonProps<
    Pick<
        RefineCloneButtonProps,
        | "resource"
        | "recordItemId"
        | "hideText"
        | "accessControl"
        | "meta"
        | "onClick"
    >
>;

export type ImportButtonProps = Omit<
    CustomButtonProps<
        RefineExportButtonProps<
            RefineButtonResourceProps &
                RefineButtonSingleProps & {
                    access: Omit<
                        React.ComponentProps<typeof CanAccess>,
                        "children" | "action" | "resource" | "params"
                    >;
                }
        >
    > & {
        accept: React.InputHTMLAttributes<HTMLInputElement>["accept"];
        onChange: (files: File[]) => void;
    },
    "onClick"
>;
