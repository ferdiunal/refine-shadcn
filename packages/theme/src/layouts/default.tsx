import { ModeToggle, Sidebar } from "@/components";
import { Link } from "@/components/link";
import { cn } from "@/lib/utils";
import type { LayoutProps, LogoType } from "@/types";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/ui/resizable";
import { useMediaQuery } from "@react-hook/media-query";
import { useResource } from "@refinedev/core";
import { cloneElement, isValidElement, useMemo, useState } from "react";
import { BaseLayout } from "./base";

export const DefaultLayout = ({
    children,
    defaultLayout,
    defaultCollapsed = false,
    navCollapsedSize,
    navbar,
    footer,
    logo,
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
}: LayoutProps) => {
    const { resources } = useResource();

    const firstDashboard = resources?.[0];

    const xs = useMediaQuery("only screen and (max-width: 579.999px)");
    const sm = useMediaQuery(
        "only screen and (min-width: 640px) and (max-width: 767.999px)",
    );
    const md = useMediaQuery(
        "only screen and (min-width: 768px) and (max-width: 1023.999px)",
    );
    const lg = useMediaQuery("only screen and (min-width: 1024px)");

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
            <BaseLayout
                attribute={attribute}
                defaultTheme={defaultTheme}
                enableSystem={enableSystem}
                disableTransitionOnChange={disableTransitionOnChange}
                enableColorScheme={enableColorScheme}
                forcedTheme={forcedTheme}
                nonce={nonce}
                storageKey={storageKey}
                themes={themes}
                value={value}
            >
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
                                "flex py-1.5 max-h-14 items-center border-b border-border/40 justify-center",
                                hasCollapsed && "px-2",
                            )}
                        >
                            <Link
                                href={firstDashboard.list?.toString() ?? "/"}
                                className="inline-flex items-center justify-center"
                                title={
                                    firstDashboard.meta?.label ??
                                    firstDashboard.name
                                }
                            >
                                {Logo}
                            </Link>
                        </div>
                        <Sidebar isCollapsed={hasCollapsed} />
                    </ResizablePanel>
                    <ResizableHandle withHandle className="bg-border/40" />
                    <ResizablePanel
                        defaultSize={layout[1]}
                        minSize={25}
                        className="xl:max-h-dvh h-full !overflow-y-auto flex flex-col overflow-x-hidden"
                    >
                        <header
                            className={cn(
                                "sticky top-0 z-50 py-2 h-14 px-4 flex justify-end items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                                navbar?.rightSide && "justify-between",
                            )}
                        >
                            {navbar?.leftSide && (
                                <div className="flex items-center justify-start flex-1">
                                    {navbar?.leftSide}
                                </div>
                            )}
                            {navbar?.rightSide ? (
                                <div className="flex items-center justify-end flex-1">
                                    {<ModeToggle />}
                                    {navbar?.rightSide}
                                </div>
                            ) : (
                                <ModeToggle />
                            )}
                        </header>
                        <main className="grow px-6 py-4">{children}</main>
                        {footer && (
                            <footer className="px-6 py-4 border-t border-border/40 sticky bottom-0 bg-background text-primary flex flex-row items-center">
                                <div className="w-full">{footer}</div>
                            </footer>
                        )}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </BaseLayout>
        </>
    );
};

DefaultLayout.displayName = "DefaultLayout";
