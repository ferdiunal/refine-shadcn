import { LucideIcon } from "lucide-react";
import {
    ComponentProps,
    PropsWithChildren,
    ReactElement,
    ReactNode,
} from "react";
import { ThemeProvider } from "@/providers/theme-provider";

export type LayoutResource = {
    title: string;
    label?: string;
    link: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    icon: LucideIcon;
    variant: "default" | "ghost";
};

export type LogoType =
    | ReactElement<React.ComponentProps<"img">>
    | ReactNode<React.ComponentProps<"img">>;
export type LayoutProps = PropsWithChildren<
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
