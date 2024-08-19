"use client";
import { DefaultLayout } from "@ferdiunal/refine-shadcn";
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import dataProvider from "@refinedev/simple-rest";
import { ComponentProps, PropsWithChildren } from "react";
import { resources } from "./resources";
import Footer from "./components/footer";

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
                    collapsed: <img src="/logo-mini.svg" alt="Refine" />,
                    default: (
                        <>
                            <div className="inline-flex items-center gap-x-4">
                                <img
                                    src="/logo-mini.svg"
                                    alt="Refine"
                                    className="w-8 h-8"
                                />
                                <h3 className="font-bold text-xl">
                                    Refine Admin
                                </h3>
                            </div>
                        </>
                    ),
                }}
                footer={<Footer />}
            >
                {children}
            </DefaultLayout>
        </Refine>
    );
};

export default AppLayout;
