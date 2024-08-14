import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as React$1 from 'react';
import React__default, { ReactElement, ComponentProps, ReactNode, PropsWithChildren, FC, DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { CanAccess, UseSelectReturnType, BaseOption, BaseRecord, HttpError, NotificationProvider } from '@refinedev/core';
import { RefineShowButtonProps, RefineCreateButtonProps, RefineDeleteButtonProps, RefineEditButtonProps, RefineListButtonProps, RefineSaveButtonProps, RefineButtonResourceProps, RefineButtonSingleProps, RefineExportButtonProps, RefineRefreshButtonProps, RefineCloneButtonProps, RefineCrudCreateProps, RefineCrudEditProps, RefineCrudListProps, RefineCrudShowProps, RefineBreadcrumbProps } from '@refinedev/ui-types';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { AlertDialogProps } from '@radix-ui/react-alert-dialog';
import { DeleteButtonValues } from '@refinedev/core/dist/hooks/button/delete-button';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, UseControllerProps, ControllerRenderProps, ControllerProps } from 'react-hook-form';
import { UseFormReturnType } from '@refinedev/react-hook-form';
import * as SelectPrimitive from '@radix-ui/react-select';
import { SelectProps } from '@radix-ui/react-select';
import * as _radix_ui_react_checkbox from '@radix-ui/react-checkbox';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { PopoverContentProps } from '@radix-ui/react-popover';
import { UseTableReturnType, UseTableProps } from '@refinedev/react-table';
import { Column, ColumnDefTemplate, CellContext } from '@tanstack/react-table';
import { DayPicker } from 'react-day-picker';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as _radix_ui_react_slot from '@radix-ui/react-slot';
import * as LabelPrimitive from '@radix-ui/react-label';
import { LucideProps } from 'lucide-react';
import * as ResizablePrimitive from 'react-resizable-panels';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { Toaster as Toaster$1 } from 'sonner';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    icon?: React$1.ReactElement<SVGSVGElement>;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

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
        isCreate?: boolean;
        isEdit?: boolean;
        isDelete?: boolean;
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
        isEdit?: boolean;
        isDelete?: boolean;
    }>;

type ModeToggleProps = {
    align?: "start" | "center" | "end";
    setTheme?: (theme: "light" | "dark" | "system") => void;
};

type LogoType =
    | ReactElement<React.ComponentProps<"img">>
    | ReactNode<React.ComponentProps<"img">>;
type LayoutProps = PropsWithChildren<{
    defaultLayout: number[] | undefined;
    defaultCollapsed?: boolean;
    modeToggle?: ModeToggleProps;
    logo?: {
        collapsed?: LogoType;
        default: LogoType;
    };
    navCollapsedSize: number;
    navbar?: {
        leftSide?: ReactElement | ReactNode;
        rightSide?: ReactElement | ReactNode;
    };
}>;

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
};
declare const Form$1: <TQueryFnData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables extends FieldValues = FieldValues, TContext extends object = {}, TData extends BaseRecord = TQueryFnData, TResponse extends BaseRecord = TData, TResponseError extends HttpError = TError>({ formProps, isWatchable, saveButtonProps, ...props }: FormProps<TQueryFnData, TError, TVariables, TContext, TData, TResponse, TResponseError>) => react_jsx_runtime.JSX.Element;

declare const Link: React$1.ForwardRefExoticComponent<React$1.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
} & React$1.RefAttributes<HTMLAnchorElement>>;

declare const ModeToggle: FC<ModeToggleProps>;

declare const PageHeader: FC<PageHeaderProps>;

declare const Select$1: React__default.ForwardRefExoticComponent<SelectProps & {
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

declare const DefaultLayout: {
    ({ children, defaultLayout, defaultCollapsed, navCollapsedSize, modeToggle, navbar, logo, }: LayoutProps): react_jsx_runtime.JSX.Element;
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
type TableProps<TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError> = UseTableProps<TData, TError, TData> & {
    children?: ReactElement<ColumnProps<TData, TError>>[];
    showHeader?: boolean;
};
declare function Table$1<TQueryFnData extends BaseRecord = BaseRecord, TData extends BaseRecord = TQueryFnData, TError extends HttpError = HttpError>({ children, showHeader, columns, ...props }: TableProps<TData, TError>): react_jsx_runtime.JSX.Element;
declare namespace Table$1 {
    var Column: <TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError>(props: ColumnProps<TData, TError>) => React__default.ReactElement<any, string | React__default.JSXElementConstructor<any>> | undefined;
    var CheckAll: React__default.FC<Omit<Omit<_radix_ui_react_checkbox.CheckboxProps & React__default.RefAttributes<HTMLButtonElement>, "ref"> & React__default.RefAttributes<HTMLButtonElement>, "ref"> & {
        table: UseTableReturnType<BaseRecord, HttpError>;
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

declare const AlertDialog: React$1.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React$1.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React$1.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
declare const AlertDialogOverlay: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogContent: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement & VariantProps<(props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string>>>;
declare const AlertDialogCancel: React$1.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLButtonElement & VariantProps<(props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string>>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface BadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const Breadcrumb: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React$1.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React$1.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React$1.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type CalendarProps = React$1.ComponentProps<typeof DayPicker>;
declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;
declare namespace Calendar {
    var displayName: string;
}

declare const Card: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const Checkbox: React$1.ForwardRefExoticComponent<Omit<_radix_ui_react_checkbox.CheckboxProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Command: React$1.ForwardRefExoticComponent<Omit<{
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
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
interface CommandDialogProps extends DialogProps {
}
declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => react_jsx_runtime.JSX.Element;
declare const CommandInput: React$1.ForwardRefExoticComponent<Omit<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React$1.InputHTMLAttributes<HTMLInputElement>> & {
    ref?: React$1.Ref<HTMLInputElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.InputHTMLAttributes<HTMLInputElement>>, "type" | "onChange" | "value"> & {
    value?: string;
    onValueChange?: (search: string) => void;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandList: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    label?: string;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>>, "heading" | "value"> & {
    heading?: React$1.ReactNode;
    value?: string;
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React$1.ForwardRefExoticComponent<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    alwaysRender?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | "asChild" | keyof React$1.HTMLAttributes<HTMLDivElement>>, "onSelect" | "disabled" | "value"> & {
    disabled?: boolean;
    onSelect?: (value: string) => void;
    value?: string;
    keywords?: string[];
    forceMount?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const FormLabel: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & React$1.RefAttributes<HTMLLabelElement>>;
declare const FormControl: React$1.ForwardRefExoticComponent<Omit<_radix_ui_react_slot.SlotProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const FormDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

interface InputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

declare const Label: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_dist_types.ClassProp | undefined) => string> & React$1.RefAttributes<HTMLLabelElement>>;

declare const LoadingIcon: React__default.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>>;

declare const Popover: React$1.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React$1.RefAttributes<HTMLDivElement>>;
declare const PopoverContent: React$1.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => react_jsx_runtime.JSX.Element;
declare const ResizablePanel: React$1.ForwardRefExoticComponent<Omit<React$1.HTMLAttributes<keyof HTMLElementTagNameMap>, "id" | "onResize"> & {
    className?: string | undefined;
    collapsedSize?: number | undefined;
    collapsible?: boolean | undefined;
    defaultSize?: number | undefined;
    id?: string | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    onCollapse?: ResizablePrimitive.PanelOnCollapse | undefined;
    onExpand?: ResizablePrimitive.PanelOnExpand | undefined;
    onResize?: ResizablePrimitive.PanelOnResize | undefined;
    order?: number | undefined;
    style?: object | undefined;
    tagName?: keyof HTMLElementTagNameMap | undefined;
} & {
    children?: React$1.ReactNode;
} & React$1.RefAttributes<ResizablePrimitive.ImperativePanelHandle>>;
declare const ResizableHandle: ({ withHandle, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}) => react_jsx_runtime.JSX.Element;

declare const ScrollArea: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Separator: React$1.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type ToasterProps = React.ComponentProps<typeof Toaster$1>;
declare const Toaster: ({ ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;

declare const Table: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableElement> & React$1.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableRowElement> & React$1.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React$1.ForwardRefExoticComponent<React$1.ThHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React$1.ForwardRefExoticComponent<React$1.TdHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableCaptionElement> & React$1.RefAttributes<HTMLTableCaptionElement>>;

interface TextareaProps extends React$1.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const index_AlertDialog: typeof AlertDialog;
declare const index_AlertDialogAction: typeof AlertDialogAction;
declare const index_AlertDialogCancel: typeof AlertDialogCancel;
declare const index_AlertDialogContent: typeof AlertDialogContent;
declare const index_AlertDialogDescription: typeof AlertDialogDescription;
declare const index_AlertDialogFooter: typeof AlertDialogFooter;
declare const index_AlertDialogHeader: typeof AlertDialogHeader;
declare const index_AlertDialogOverlay: typeof AlertDialogOverlay;
declare const index_AlertDialogPortal: typeof AlertDialogPortal;
declare const index_AlertDialogTitle: typeof AlertDialogTitle;
declare const index_AlertDialogTrigger: typeof AlertDialogTrigger;
declare const index_Badge: typeof Badge;
type index_BadgeProps = BadgeProps;
declare const index_Breadcrumb: typeof Breadcrumb;
declare const index_BreadcrumbEllipsis: typeof BreadcrumbEllipsis;
declare const index_BreadcrumbItem: typeof BreadcrumbItem;
declare const index_BreadcrumbLink: typeof BreadcrumbLink;
declare const index_BreadcrumbList: typeof BreadcrumbList;
declare const index_BreadcrumbPage: typeof BreadcrumbPage;
declare const index_BreadcrumbSeparator: typeof BreadcrumbSeparator;
declare const index_Button: typeof Button;
type index_ButtonProps = ButtonProps;
declare const index_Calendar: typeof Calendar;
type index_CalendarProps = CalendarProps;
declare const index_Card: typeof Card;
declare const index_CardContent: typeof CardContent;
declare const index_CardDescription: typeof CardDescription;
declare const index_CardFooter: typeof CardFooter;
declare const index_CardHeader: typeof CardHeader;
declare const index_CardTitle: typeof CardTitle;
declare const index_Checkbox: typeof Checkbox;
declare const index_Command: typeof Command;
declare const index_CommandDialog: typeof CommandDialog;
declare const index_CommandEmpty: typeof CommandEmpty;
declare const index_CommandGroup: typeof CommandGroup;
declare const index_CommandInput: typeof CommandInput;
declare const index_CommandItem: typeof CommandItem;
declare const index_CommandList: typeof CommandList;
declare const index_CommandSeparator: typeof CommandSeparator;
declare const index_CommandShortcut: typeof CommandShortcut;
declare const index_Dialog: typeof Dialog;
declare const index_DialogClose: typeof DialogClose;
declare const index_DialogContent: typeof DialogContent;
declare const index_DialogDescription: typeof DialogDescription;
declare const index_DialogFooter: typeof DialogFooter;
declare const index_DialogHeader: typeof DialogHeader;
declare const index_DialogOverlay: typeof DialogOverlay;
declare const index_DialogPortal: typeof DialogPortal;
declare const index_DialogTitle: typeof DialogTitle;
declare const index_DialogTrigger: typeof DialogTrigger;
declare const index_DropdownMenu: typeof DropdownMenu;
declare const index_DropdownMenuCheckboxItem: typeof DropdownMenuCheckboxItem;
declare const index_DropdownMenuContent: typeof DropdownMenuContent;
declare const index_DropdownMenuGroup: typeof DropdownMenuGroup;
declare const index_DropdownMenuItem: typeof DropdownMenuItem;
declare const index_DropdownMenuLabel: typeof DropdownMenuLabel;
declare const index_DropdownMenuPortal: typeof DropdownMenuPortal;
declare const index_DropdownMenuRadioGroup: typeof DropdownMenuRadioGroup;
declare const index_DropdownMenuRadioItem: typeof DropdownMenuRadioItem;
declare const index_DropdownMenuSeparator: typeof DropdownMenuSeparator;
declare const index_DropdownMenuShortcut: typeof DropdownMenuShortcut;
declare const index_DropdownMenuSub: typeof DropdownMenuSub;
declare const index_DropdownMenuSubContent: typeof DropdownMenuSubContent;
declare const index_DropdownMenuSubTrigger: typeof DropdownMenuSubTrigger;
declare const index_DropdownMenuTrigger: typeof DropdownMenuTrigger;
declare const index_Form: typeof Form;
declare const index_FormControl: typeof FormControl;
declare const index_FormDescription: typeof FormDescription;
declare const index_FormField: typeof FormField;
declare const index_FormItem: typeof FormItem;
declare const index_FormLabel: typeof FormLabel;
declare const index_FormMessage: typeof FormMessage;
declare const index_Input: typeof Input;
type index_InputProps = InputProps;
declare const index_Label: typeof Label;
declare const index_LoadingIcon: typeof LoadingIcon;
declare const index_Popover: typeof Popover;
declare const index_PopoverAnchor: typeof PopoverAnchor;
declare const index_PopoverContent: typeof PopoverContent;
declare const index_PopoverTrigger: typeof PopoverTrigger;
declare const index_ResizableHandle: typeof ResizableHandle;
declare const index_ResizablePanel: typeof ResizablePanel;
declare const index_ResizablePanelGroup: typeof ResizablePanelGroup;
declare const index_ScrollArea: typeof ScrollArea;
declare const index_ScrollBar: typeof ScrollBar;
declare const index_Select: typeof Select;
declare const index_SelectContent: typeof SelectContent;
declare const index_SelectGroup: typeof SelectGroup;
declare const index_SelectItem: typeof SelectItem;
declare const index_SelectLabel: typeof SelectLabel;
declare const index_SelectScrollDownButton: typeof SelectScrollDownButton;
declare const index_SelectScrollUpButton: typeof SelectScrollUpButton;
declare const index_SelectSeparator: typeof SelectSeparator;
declare const index_SelectTrigger: typeof SelectTrigger;
declare const index_SelectValue: typeof SelectValue;
declare const index_Separator: typeof Separator;
declare const index_Table: typeof Table;
declare const index_TableBody: typeof TableBody;
declare const index_TableCaption: typeof TableCaption;
declare const index_TableCell: typeof TableCell;
declare const index_TableFooter: typeof TableFooter;
declare const index_TableHead: typeof TableHead;
declare const index_TableHeader: typeof TableHeader;
declare const index_TableRow: typeof TableRow;
declare const index_Textarea: typeof Textarea;
type index_TextareaProps = TextareaProps;
declare const index_Toaster: typeof Toaster;
declare const index_Tooltip: typeof Tooltip;
declare const index_TooltipContent: typeof TooltipContent;
declare const index_TooltipProvider: typeof TooltipProvider;
declare const index_TooltipTrigger: typeof TooltipTrigger;
declare const index_badgeVariants: typeof badgeVariants;
declare const index_buttonVariants: typeof buttonVariants;
declare const index_useFormField: typeof useFormField;
declare namespace index {
  export { index_AlertDialog as AlertDialog, index_AlertDialogAction as AlertDialogAction, index_AlertDialogCancel as AlertDialogCancel, index_AlertDialogContent as AlertDialogContent, index_AlertDialogDescription as AlertDialogDescription, index_AlertDialogFooter as AlertDialogFooter, index_AlertDialogHeader as AlertDialogHeader, index_AlertDialogOverlay as AlertDialogOverlay, index_AlertDialogPortal as AlertDialogPortal, index_AlertDialogTitle as AlertDialogTitle, index_AlertDialogTrigger as AlertDialogTrigger, index_Badge as Badge, type index_BadgeProps as BadgeProps, index_Breadcrumb as Breadcrumb, index_BreadcrumbEllipsis as BreadcrumbEllipsis, index_BreadcrumbItem as BreadcrumbItem, index_BreadcrumbLink as BreadcrumbLink, index_BreadcrumbList as BreadcrumbList, index_BreadcrumbPage as BreadcrumbPage, index_BreadcrumbSeparator as BreadcrumbSeparator, index_Button as Button, type index_ButtonProps as ButtonProps, index_Calendar as Calendar, type index_CalendarProps as CalendarProps, index_Card as Card, index_CardContent as CardContent, index_CardDescription as CardDescription, index_CardFooter as CardFooter, index_CardHeader as CardHeader, index_CardTitle as CardTitle, index_Checkbox as Checkbox, index_Command as Command, index_CommandDialog as CommandDialog, index_CommandEmpty as CommandEmpty, index_CommandGroup as CommandGroup, index_CommandInput as CommandInput, index_CommandItem as CommandItem, index_CommandList as CommandList, index_CommandSeparator as CommandSeparator, index_CommandShortcut as CommandShortcut, index_Dialog as Dialog, index_DialogClose as DialogClose, index_DialogContent as DialogContent, index_DialogDescription as DialogDescription, index_DialogFooter as DialogFooter, index_DialogHeader as DialogHeader, index_DialogOverlay as DialogOverlay, index_DialogPortal as DialogPortal, index_DialogTitle as DialogTitle, index_DialogTrigger as DialogTrigger, index_DropdownMenu as DropdownMenu, index_DropdownMenuCheckboxItem as DropdownMenuCheckboxItem, index_DropdownMenuContent as DropdownMenuContent, index_DropdownMenuGroup as DropdownMenuGroup, index_DropdownMenuItem as DropdownMenuItem, index_DropdownMenuLabel as DropdownMenuLabel, index_DropdownMenuPortal as DropdownMenuPortal, index_DropdownMenuRadioGroup as DropdownMenuRadioGroup, index_DropdownMenuRadioItem as DropdownMenuRadioItem, index_DropdownMenuSeparator as DropdownMenuSeparator, index_DropdownMenuShortcut as DropdownMenuShortcut, index_DropdownMenuSub as DropdownMenuSub, index_DropdownMenuSubContent as DropdownMenuSubContent, index_DropdownMenuSubTrigger as DropdownMenuSubTrigger, index_DropdownMenuTrigger as DropdownMenuTrigger, index_Form as Form, index_FormControl as FormControl, index_FormDescription as FormDescription, index_FormField as FormField, index_FormItem as FormItem, index_FormLabel as FormLabel, index_FormMessage as FormMessage, index_Input as Input, type index_InputProps as InputProps, index_Label as Label, index_LoadingIcon as LoadingIcon, index_Popover as Popover, index_PopoverAnchor as PopoverAnchor, index_PopoverContent as PopoverContent, index_PopoverTrigger as PopoverTrigger, index_ResizableHandle as ResizableHandle, index_ResizablePanel as ResizablePanel, index_ResizablePanelGroup as ResizablePanelGroup, index_ScrollArea as ScrollArea, index_ScrollBar as ScrollBar, index_Select as Select, index_SelectContent as SelectContent, index_SelectGroup as SelectGroup, index_SelectItem as SelectItem, index_SelectLabel as SelectLabel, index_SelectScrollDownButton as SelectScrollDownButton, index_SelectScrollUpButton as SelectScrollUpButton, index_SelectSeparator as SelectSeparator, index_SelectTrigger as SelectTrigger, index_SelectValue as SelectValue, index_Separator as Separator, index_Table as Table, index_TableBody as TableBody, index_TableCaption as TableCaption, index_TableCell as TableCell, index_TableFooter as TableFooter, index_TableHead as TableHead, index_TableHeader as TableHeader, index_TableRow as TableRow, index_Textarea as Textarea, type index_TextareaProps as TextareaProps, index_Toaster as Toaster, index_Tooltip as Tooltip, index_TooltipContent as TooltipContent, index_TooltipProvider as TooltipProvider, index_TooltipTrigger as TooltipTrigger, index_badgeVariants as badgeVariants, index_buttonVariants as buttonVariants, index_useFormField as useFormField };
}

export { type BreadcrumbProps, Breadcrumbs, CloneButton, type ColumnProps, Combobox, ConfirmDialog, CreateButton, CreatePage, DefaultLayout, DeleteActionModal, DeleteButton, DeleteContext, type DeleteContextType, DeleteProvider, EditButton, EditPage, ExportButton, Field, type FieldProps, Form$1 as Form, type FormProps, ImportButton, Link, ListButton, ListPage, ModeToggle, PageHeader, RefreshButton, SaveButton, Select$1 as Select, ShowButton, ShowPage, Sidebar, Table$1 as Table, type TableFilterProps, type TableListFilterOption, type TableProps, index as UI, notificationProvider, useNotificationProvider };
