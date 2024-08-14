import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/ui/resizable";
import { Toaster } from "@/ui/sonner";
import { TooltipProvider } from "@/ui/tooltip";
import { cn } from "@/lib/utils";
import type { LayoutProps, LogoType } from "@/types";
import { useMediaQuery } from "@react-hook/media-query";
import { useMemo, isValidElement, cloneElement, useState } from "react";
import { Sidebar, ModeToggle } from "@/components";
import { Link } from "@/components/link";

export const DefaultLayout = ({
    children,
    defaultLayout,
    defaultCollapsed = false,
    navCollapsedSize,
    modeToggle,
    logo,
}: LayoutProps) => {
    const xs = useMediaQuery("only screen and (max-width: 579.999px)");
    const sm = useMediaQuery(
        "only screen and (min-width: 640px) and (max-width: 767.999px)",
    );
    const md = useMediaQuery(
        "only screen and (min-width: 768px) and (max-width: 1023.999px)",
    );
    const lg = useMediaQuery("only screen and (min-width: 1024px)");

    console.log([xs, sm, md, lg]);

    const [isCollapsed, setIsCollapsed] = useState<boolean>(
        xs ?? defaultCollapsed,
    );

    const layout = useMemo(() => {
        if (defaultLayout) {
            return defaultLayout;
        }
        if (xs) {
            return [15, 85];
        } else if (sm) {
            return [20, 80];
        } else if (md) {
            return [25, 75];
        }

        return [15, 85];
    }, [defaultLayout, xs, sm, md]);

    const SidebarSizes = useMemo(() => {
        if (lg) {
            return {
                minSize: 11,
                maxSize: 15,
            };
        } else if (md) {
            return {
                minSize: 15,
                maxSize: 25,
            };
        } else if (sm) {
            return {
                minSize: 20,
                maxSize: 30,
            };
        }

        return {
            minSize: 15,
            maxSize: 15,
        };
    }, [sm, md, lg]);

    const hasCollapsed = useMemo(() => {
        return isCollapsed || xs || sm || md;
    }, [isCollapsed, md, sm, xs]);

    const Logo: LogoType | undefined = useMemo<LogoType | undefined>(():
        | LogoType
        | undefined => {
        if (!logo) {
            return null;
        }

        if (!hasCollapsed) {
            if (isValidElement(logo.default)) {
                return cloneElement<LogoType>(logo.default, {
                    className: "w-auto h-8",
                });
            }
        }

        const component = hasCollapsed ? logo.collapsed : logo.default;
        if (isValidElement(component)) {
            return cloneElement<LogoType>(component, {
                className: "w-auto h-8",
            });
        }

        return null;
    }, [logo, defaultLayout, hasCollapsed]);

    return (
        <>
            <TooltipProvider delayDuration={0}>
                <ResizablePanelGroup
                    direction="horizontal"
                    onLayout={(sizes: number[]) => {
                        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                            sizes,
                        )}`;
                    }}
                    className="h-full items-stretch"
                >
                    <ResizablePanel
                        defaultSize={layout[0]}
                        collapsedSize={navCollapsedSize}
                        collapsible={true}
                        minSize={SidebarSizes.minSize}
                        maxSize={SidebarSizes.maxSize}
                        onExpand={() => {
                            const collapsed = xs;
                            setIsCollapsed(collapsed);
                            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                                collapsed,
                            )}`;
                        }}
                        onCollapse={() => {
                            const collapsed = true;
                            setIsCollapsed(collapsed);
                            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                                collapsed,
                            )}`;
                        }}
                        className={cn(
                            hasCollapsed &&
                                "min-w-[50px] transition-all duration-300 ease-in-out",
                        )}
                    >
                        <div
                            className={cn(
                                "flex h-14 items-center border-b border-border/40 justify-center",
                                hasCollapsed ? "h-14" : "px-2",
                            )}
                        >
                            <Link href="/">{Logo}</Link>
                        </div>
                        <Sidebar isCollapsed={hasCollapsed} />
                    </ResizablePanel>
                    <ResizableHandle withHandle className="bg-border/40" />
                    <ResizablePanel
                        defaultSize={layout[1]}
                        minSize={25}
                        className="xl:max-h-dvh h-full !overflow-y-auto overflow-x-hidden"
                    >
                        <header className="sticky top-0 z-50 h-14 px-4 flex justify-end items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                            <ModeToggle {...modeToggle} />
                        </header>
                        <main className="px-6 py-4">{children}</main>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </TooltipProvider>
            <Toaster />
        </>
    );
};

DefaultLayout.displayName = "DefaultLayout";
