import {
    RefineCrudCreateProps,
    RefineCrudEditProps,
    RefineCrudListProps,
    RefineCrudShowProps,
} from "@refinedev/ui-types";

import { PageHeaderProps } from "./pageHeader";
import { CreateButtonProps } from "./buttons";

export type CreateProps = RefineCrudCreateProps<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >,
    PageHeaderProps
> &
    Partial<{
        extra: React.ReactNode;
    }>;

export type EditProps = RefineCrudEditProps<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >,
    PageHeaderProps
> &
    Partial<{
        extra: React.ReactNode;
    }>;

export type ListProps = Omit<
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

export type ShowProps = RefineCrudShowProps<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >,
    PageHeaderProps
> &
    Partial<{
        extra: React.ReactNode;
    }>;
