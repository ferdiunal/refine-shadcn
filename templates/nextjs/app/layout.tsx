import "./globals.css";
import "@ferdiunal/refine-shadcn/dist/globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { Suspense } from "react";
const AppLayout = dynamic(() => import("./app-layout"), {
    ssr: false,
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "@ferdiunal/refine-shadcn - Next.js Example",
    description: "Next.js example with @ferdiunal/refine-shadcn",
    creator: "Ferdi ÜNAL",
    authors: {
        url: "https://github.com/ferdiunal/refine-shadcn",
        name: "Ferdi ÜNAL",
    },
    twitter: {
        site: "@_ferdiunal",
        creator: "@_ferdiunal",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookie = cookies();
    const layout = cookie.get("react-resizable-panels:layout");
    const collapsed = cookie.get("react-resizable-panels:collapsed");
    const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
    const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : false;
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/logo-mini.svg" />
            </head>
            <body className={inter.className}>
                <Suspense fallback={<div>Loading...</div>}>
                    <AppLayout
                        defaultLayout={defaultLayout}
                        defaultCollapsed={defaultCollapsed}
                    >
                        {children}
                    </AppLayout>
                </Suspense>
            </body>
        </html>
    );
}
