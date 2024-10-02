import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as React$1 from 'react';
import React__default, { ReactElement, ComponentProps, ReactNode, PropsWithChildren, FC, DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { CanAccess, UseSelectReturnType, BaseOption, BaseRecord, HttpError, NotificationProvider } from '@refinedev/core';
import { RefineShowButtonProps, RefineCreateButtonProps, RefineDeleteButtonProps, RefineEditButtonProps, RefineListButtonProps, RefineSaveButtonProps, RefineButtonResourceProps, RefineButtonSingleProps, RefineExportButtonProps, RefineRefreshButtonProps, RefineCloneButtonProps, RefineCrudCreateProps, RefineCrudEditProps, RefineCrudListProps, RefineCrudShowProps, RefineBreadcrumbProps } from '@refinedev/ui-types';
import { AlertDialogProps } from '@radix-ui/react-alert-dialog';
import { DeleteButtonValues } from '@refinedev/core/dist/hooks/button/delete-button';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { FieldValues, FieldPath, UseControllerProps, ControllerRenderProps } from 'react-hook-form';
import { UseFormReturnType } from '@refinedev/react-hook-form';
import { SelectProps } from '@radix-ui/react-select';
import { ThemeProviderProps } from 'next-themes/dist/types';
import * as _radix_ui_react_checkbox from '@radix-ui/react-checkbox';
import { PopoverContentProps } from '@radix-ui/react-popover';
import { UseTableReturnType, UseTableProps } from '@refinedev/react-table';
import { Column, ColumnDefTemplate, CellContext } from '@tanstack/react-table';

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    icon?: React$1.ReactElement<SVGSVGElement>;
}

type ConfirmDialogProps = AlertDialogProps & {
    title?: string;
    description?: string;
    okIcon?: ReactElement<SVGSVGElement>;
    okIconSide?: "left" | "right";
    cancelIconSide?: "left" | "right";
    cancelIcon?: ReactElement<SVGSVGElement>;
    okText?: string;
    cancelText?: string;
    loading?: boolean;
    onConfirm: DeleteButtonValues["onConfirm"];
    children?: ReactElement<SVGSVGElement>;
    okButtonVariant?: VariantProps<typeof buttonVariants>["variant"];
    cancelButtonVariant?: VariantProps<typeof buttonVariants>["variant"];
    okButtonSize?: VariantProps<typeof buttonVariants>["size"];
    cancelButtonSize?: VariantProps<typeof buttonVariants>["size"];
};

type CustomButtonProps<T> = ButtonProps & T;

type ShowButtonProps = CustomButtonProps<RefineShowButtonProps>;

type CreateButtonProps = CustomButtonProps<
    Pick<
        RefineCreateButtonProps,
        "resource" | "hideText" | "accessControl" | "meta" | "onClick"
    >
>;

type DeleteButtonProps = CustomButtonProps<
    RefineDeleteButtonProps<{
        confirmDescription?: ConfirmDialogProps["description"];
    }>
>;

type EditButtonProps = CustomButtonProps<RefineEditButtonProps>;

type ListButtonProps = CustomButtonProps<RefineListButtonProps>;

type SaveButtonProps = ButtonProps &
    RefineSaveButtonProps &
    RefineButtonResourceProps &
    RefineButtonSingleProps & {
        access?: Omit<
            React.ComponentProps<typeof CanAccess>,
            "children" | "action" | "resource" | "params"
        >;
    };

type ExportButtonProps = ButtonProps &
    RefineExportButtonProps<
        RefineButtonResourceProps &
            RefineButtonSingleProps & {
                access: Omit<
                    ComponentProps<typeof CanAccess>,
                    "children" | "action" | "resource" | "params"
                >;
            }
    >;

type RefreshButtonProps = CustomButtonProps<RefineRefreshButtonProps>;

type CloneButtonProps = CustomButtonProps<
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

type ImportButtonProps = Omit<
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

type PageHeaderProps = {
    title?: ReactNode;
    subTitle?: ReactNode;
    isBack?: boolean;
    onBack?: (e?: React.MouseEvent<HTMLElement>) => void;
    className?: string;
    breadcrumb?: ReactNode;
    extra?: ReactNode;
};

type CreateProps = RefineCrudCreateProps<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >,
    PageHeaderProps
> &
    Partial<{
        extra: React.ReactNode;
    }>;

type EditProps = RefineCrudEditProps<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >,
    PageHeaderProps
> &
    Partial<{
        extra: React.ReactNode;
    }>;

type ListProps = Omit<
    RefineCrudListProps<
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >,
        PageHeaderProps,
        React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >
    >,
    "createButtonProps"
> &
    Partial<{
        createButtonProps: CreateButtonProps;
        extra: React.ReactNode;
        className: string;
    }>;

type ShowProps = RefineCrudShowProps<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >,
    PageHeaderProps
> &
    Partial<{
        extra: React.ReactNode;
    }>;

declare function ThemeProvider({ children, ...props }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

type LogoType =
    | ReactElement<React.ComponentProps<"img">>
    | ReactNode<React.ComponentProps<"img">>;
type LayoutProps = PropsWithChildren<
    {
        defaultLayout: number[] | undefined;
        defaultCollapsed?: boolean;
        footer?: ReactElement | ReactNode;
        logo?: {
            collapsed?: LogoType;
            default: LogoType;
        };
        navCollapsedSize: number;
        navbar?: {
            leftSide?: ReactElement | ReactNode;
            rightSide?: ReactElement | ReactNode;
        };
    } & React.ComponentProps<typeof ThemeProvider>
>;

declare const CloneButton: FC<CloneButtonProps>;

declare const CreateButton: FC<CreateButtonProps>;

declare const DeleteButton: FC<DeleteButtonProps>;

declare const EditButton: FC<EditButtonProps>;

declare const ExportButton: FC<ExportButtonProps>;

declare const ImportButton: FC<ImportButtonProps>;

declare const ListButton: FC<ListButtonProps>;

declare const RefreshButton: FC<RefreshButtonProps>;

declare const SaveButton: FC<SaveButtonProps>;

declare const ShowButton: FC<ShowButtonProps>;

type BreadcrumbProps = RefineBreadcrumbProps;
declare const Breadcrumbs: FC<BreadcrumbProps>;

declare const Combobox: React$1.ForwardRefExoticComponent<Omit<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & Pick<UseSelectReturnType<BaseOption, any>, "options"> & {
    placeholder?: string;
    emptyMessage?: string;
    onChange?: (value: string | number) => void;
    value?: string | number | BaseRecord;
    disabled?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;

declare const ConfirmDialog: FC<ConfirmDialogProps>;

type FieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = UseControllerProps<TFieldValues, TName> & {
    label?: string;
    description?: string;
    className?: string;
    isCheckbox?: boolean;
    children: ReactElement<{
        field: ControllerRenderProps<TFieldValues, TName>;
    }>;
};
declare const Field: (props: FieldProps) => react_jsx_runtime.JSX.Element;

type NativeFormProps = Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "onSubmit">;
type FormProps<TQueryFnData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables extends FieldValues = FieldValues, TContext extends object = {}, TData extends BaseRecord = TQueryFnData, TResponse extends BaseRecord = TData, TResponseError extends HttpError = TError> = PropsWithChildren & UseFormReturnType<TQueryFnData, TError, TVariables, TContext, TData, TResponse, TResponseError> & {
    formProps?: NativeFormProps;
    isWatchable?: boolean;
    hideCancel?: boolean;
};
declare const Form: <TQueryFnData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables extends FieldValues = FieldValues, TContext extends object = {}, TData extends BaseRecord = TQueryFnData, TResponse extends BaseRecord = TData, TResponseError extends HttpError = TError>({ formProps, isWatchable, saveButtonProps, ...props }: FormProps<TQueryFnData, TError, TVariables, TContext, TData, TResponse, TResponseError>) => react_jsx_runtime.JSX.Element;

declare const Link: React$1.ForwardRefExoticComponent<React$1.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
} & React$1.RefAttributes<HTMLAnchorElement>>;

declare const ModeToggle: () => react_jsx_runtime.JSX.Element;

declare const PageHeader: FC<PageHeaderProps>;

declare const Select: React__default.ForwardRefExoticComponent<SelectProps & {
    placeholder?: string;
    emptyMessage?: string;
    onChange?: (value: string) => void;
    options?: BaseOption[];
} & React__default.RefAttributes<HTMLDivElement>>;

type NavProps = {
    isCollapsed: boolean;
};
declare const Sidebar: {
    ({ isCollapsed }: NavProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const CreatePage: React__default.FC<CreateProps>;

declare const EditPage: FC<EditProps>;

declare const ListPage: FC<ListProps>;

declare const Row: ({ title, children, }: Required<PropsWithChildren<{
    title: string;
}>>) => react_jsx_runtime.JSX.Element;

declare const ShowPage: FC<ShowProps> & {
    Row: typeof Row;
};

type Props = PropsWithChildren<Pick<LayoutProps, "attribute" | "defaultTheme" | "enableSystem" | "disableTransitionOnChange" | "enableColorScheme" | "forcedTheme" | "nonce" | "storageKey" | "themes" | "value">>;
declare const BaseLayout: {
    ({ attribute, defaultTheme, enableSystem, disableTransitionOnChange, enableColorScheme, forcedTheme, nonce, storageKey, themes, value, children, }: Props): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const DefaultLayout: {
    ({ children, defaultLayout, defaultCollapsed, navCollapsedSize, navbar, footer, logo, attribute, defaultTheme, enableSystem, disableTransitionOnChange, enableColorScheme, forcedTheme, nonce, storageKey, themes, value, }: LayoutProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const notificationProvider: NotificationProvider;
declare const useNotificationProvider: () => NotificationProvider;

type DeleteDataType = {
    toogle: boolean;
    row: any;
    resource: string;
    redirectBack?: boolean;
    onAfterHandle?: () => void;
};
interface DeleteContextType {
    data: DeleteDataType;
    updateData: (data: DeleteDataType) => void;
}
declare function DeleteActionModal(props: DeleteContextType): react_jsx_runtime.JSX.Element;
declare const DeleteContext: React__default.Context<DeleteContextType | undefined>;
declare const DeleteProvider: React__default.FC<PropsWithChildren>;

interface RowActionsProps {
    children?: ReactNode;
}
type RowActionProps = PropsWithChildren & {
    to?: string;
    title?: string;
    asChild?: boolean;
    className?: string;
    disabled?: boolean;
    icon?: ReactNode;
    onClick?: (event: any) => void;
};
declare function RowActions({ children }: RowActionsProps): react_jsx_runtime.JSX.Element;

type DeleteActionProps = RowActionProps & {
    row: any;
    resource: string;
    title: string;
    onAfterHandle?: () => void;
};
declare function DeleteAction({ row, resource, title, disabled, onAfterHandle, ...props }: DeleteActionProps): react_jsx_runtime.JSX.Element;
declare namespace DeleteAction {
    var displayName: string;
}

type ShowActionProps = RowActionProps & {
    row: any;
    resource: string;
    title: string;
};
declare function ShowAction({ row, resource, title, disabled, ...props }: ShowActionProps): react_jsx_runtime.JSX.Element;
declare namespace ShowAction {
    var displayName: string;
}

type EditActionProps = RowActionProps & {
    row: any;
    resource: string;
    title: string;
};
declare function EditAction({ row, resource, title, disabled, ...props }: EditActionProps): react_jsx_runtime.JSX.Element;
declare namespace EditAction {
    var displayName: string;
}

declare function TableFilterDateRangePickerFilter<T extends BaseRecord = BaseRecord>({ column, title, numberOfMonths, align, }: Pick<TableFilterProps<T>, "column" | "title" | "numberOfMonths" | "align">): react_jsx_runtime.JSX.Element;

declare function TableFilterDropdown({ column, title, options, align, }: TableFilterProps): react_jsx_runtime.JSX.Element;

declare function TableFilterSearchColumn({ column, title, align, }: TableFilterProps): react_jsx_runtime.JSX.Element;

type TableListFilterOption = BaseOption & {
    icon?: React__default.ComponentType<{
        className?: string;
    }>;
};
type TableFilterProps<TData extends BaseRecord = BaseRecord> = {
    column: Column<TData>;
    title?: string;
    numberOfMonths?: number;
    align?: PopoverContentProps["align"];
    options?: TableListFilterOption[];
};
type ColumnProps<TData extends BaseRecord = BaseRecord, TValue = unknown, TError extends HttpError = HttpError> = {
    id: string;
    accessorKey: string;
    enableSorting?: boolean;
    enableHiding?: boolean;
    header?: string | FC<{
        table: UseTableReturnType<TData, TError>;
    }>;
    cell?: ColumnDefTemplate<CellContext<TData, TValue>>;
    children?: ReactElement;
    filter?: FC<TableFilterProps<TData>>;
};
type TableProps<TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError> = Partial<UseTableProps<TData, TError, TData>> & {
    children?: ReactElement<ColumnProps<TData, TError>>[];
    showHeader?: boolean;
};
declare function Table<TQueryFnData extends BaseRecord = BaseRecord, TData extends BaseRecord = TQueryFnData, TError extends HttpError = HttpError>({ children, showHeader, columns, ...props }: TableProps<TData, TError>): react_jsx_runtime.JSX.Element;
declare namespace Table {
    var Column: <TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError>(props: ColumnProps<TData, TError>) => React__default.ReactElement<any, string | React__default.JSXElementConstructor<any>> | undefined;
    var CheckAll: React__default.FC<Omit<Omit<_radix_ui_react_checkbox.CheckboxProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>, "ref"> & {
        table: UseTableReturnType<BaseRecord, HttpError>;
        options?: {
            label: string;
            onClick: () => void;
        }[];
    } & {
        children?: React__default.ReactNode | undefined;
    }>;
    var Actions: typeof RowActions;
    var Action: React__default.FC<RowActionProps>;
    var EditAction: typeof EditAction;
    var ShowAction: typeof ShowAction;
    var DeleteAction: typeof DeleteAction;
    var Filter: {
        DateRangePicker: typeof TableFilterDateRangePickerFilter;
        Dropdown: typeof TableFilterDropdown;
        Search: typeof TableFilterSearchColumn;
    };
    var displayName: string;
}

export { BaseLayout, type BreadcrumbProps, Breadcrumbs, CloneButton, type ColumnProps, Combobox, ConfirmDialog, CreateButton, CreatePage, DefaultLayout, DeleteActionModal, DeleteButton, DeleteContext, type DeleteContextType, DeleteProvider, EditButton, EditPage, ExportButton, Field, type FieldProps, Form, type FormProps, ImportButton, Link, ListButton, ListPage, ModeToggle, PageHeader, RefreshButton, SaveButton, Select, ShowButton, ShowPage, Sidebar, Table, type TableFilterProps, type TableListFilterOption, type TableProps, notificationProvider, useNotificationProvider };
