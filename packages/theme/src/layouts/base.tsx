import { ThemeProvider } from "@/providers/theme-provider";
import { LayoutProps } from "@/types";
import { Toaster, TooltipProvider } from "@/ui";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<
    Pick<
        LayoutProps,
        | "attribute"
        | "defaultTheme"
        | "enableSystem"
        | "disableTransitionOnChange"
        | "enableColorScheme"
        | "forcedTheme"
        | "nonce"
        | "storageKey"
        | "themes"
        | "value"
    >
>;

export const BaseLayout = ({
    attribute,
    defaultTheme,
    enableSystem,
    disableTransitionOnChange,
    enableColorScheme,
    forcedTheme,
    nonce,
    storageKey,
    themes,
    value,
    children,
}: Props) => {
    return (
        <ThemeProvider
            attribute={attribute ?? "class"}
            defaultTheme={defaultTheme ?? "system"}
            enableSystem={enableSystem ?? true}
            disableTransitionOnChange={disableTransitionOnChange ?? false}
            enableColorScheme={enableColorScheme ?? true}
            forcedTheme={forcedTheme}
            nonce={nonce}
            storageKey={storageKey}
            themes={themes}
            value={value}
        >
            <TooltipProvider
                delayDuration={0}
                skipDelayDuration={0}
                disableHoverableContent={true}
            >
                {children}
                <Toaster />
            </TooltipProvider>
        </ThemeProvider>
    );
};

BaseLayout.displayName = "BaseLayout";
