"use client";
import { DefaultLayout } from "@ferdiunal/refine-admin";
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import dataProvider from "@refinedev/simple-rest";
import { ComponentProps, PropsWithChildren } from "react";
import { resources } from "./resources";

type Props = PropsWithChildren<{
    defaultLayout: ComponentProps<typeof DefaultLayout>["defaultLayout"];
    defaultCollapsed: ComponentProps<typeof DefaultLayout>["defaultCollapsed"];
}>;

const API_URL = "https://api.fake-rest.refine.dev";

const AppLayout = ({ defaultCollapsed, defaultLayout, children }: Props) => {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            resources={resources}
        >
            <DefaultLayout
                defaultLayout={defaultLayout}
                defaultCollapsed={defaultCollapsed}
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                navCollapsedSize={4}
                logo={{
                    default: <img src="/logo.svg" alt="Refine" />,
                    collapsed: <img src="/logo-mini.svg" alt="Refine" />,
                }}
            >
                {children}
            </DefaultLayout>
        </Refine>
    );
};

export default AppLayout;
