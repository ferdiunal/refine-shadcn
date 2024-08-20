import { DefaultLayout, notificationProvider } from "@ferdiunal/refine-shadcn";
import "./globals.css";
import "@ferdiunal/refine-shadcn/dist/globals.css";
import { I18nProvider, Refine } from "@refinedev/core";
import routerProvider, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import Cookie from "js-cookie";
import GitHubButton from "react-github-btn";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LogoMini from "./assets/logo-mini.svg";
import Dashboard from "./pages/Dashboard";
import PostCreate from "./pages/posts/Create";
import PostEdit from "./pages/posts/Edit";
import PostList from "./pages/posts/list";
import PostShow from "./pages/posts/Show";
import UserCreate from "./pages/users/Create";
import UserEdit from "./pages/users/Edit";
import UserList from "./pages/users/list";
import UserShow from "./pages/users/Show";
import { resources } from "./resources";

const API_URL = "https://api.fake-rest.refine.dev";

function App() {
    const layout = Cookie.get("react-resizable-panels:layout");
    const collapsed = Cookie.get("react-resizable-panels:collapsed");
    const defaultLayout = layout ? JSON.parse(layout) : undefined;
    const defaultCollapsed = collapsed ? JSON.parse(collapsed) : false;
    const { t, i18n } = useTranslation();

    const i18nProvider: I18nProvider = {
        translate: (
            key: string,
            params: object,
            defaultMessage?: string,
        ): string =>
            t(key as any, params as any).toString() ??
            defaultMessage ??
            key ??
            "",
        changeLocale: (lang: string) => i18n.changeLanguage(lang),
        getLocale: () => i18n.language,
    };

    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider(API_URL)}
                resources={resources}
                i18nProvider={i18nProvider}
                notificationProvider={notificationProvider}
            >
                <Routes>
                    <Route
                        element={
                            <DefaultLayout
                                defaultLayout={defaultLayout}
                                defaultCollapsed={defaultCollapsed}
                                attribute="class"
                                defaultTheme="system"
                                enableSystem
                                disableTransitionOnChange
                                footer={
                                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-y-2 sm:gap-y-0 gap-x-4">
                                        <div className="flex-1 flex items-center justify-start gap-x-4 text-sm">
                                            <a
                                                href="https://refine.dev/docs/"
                                                target="_blank"
                                                className="flex flex-row items-center gap-x-2"
                                            >
                                                <img
                                                    src={LogoMini}
                                                    className="w-5 h-5"
                                                />
                                                Refine
                                            </a>
                                            <a
                                                href="https://ui.shadcn.com/docs"
                                                target="_blank"
                                                className="flex flex-row items-center gap-x-2"
                                            >
                                                <img
                                                    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' class='h-6 w-6'><rect width='256' height='256' fill='none'></rect><line x1='208' y1='128' x2='128' y2='208' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></line><line x1='192' y1='40' x2='40' y2='192' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></line></svg>"
                                                    className="w-5 h-5"
                                                />
                                                Shadcn
                                            </a>
                                        </div>
                                        <div className="flex-1 flex-col sm:flex-row items-start justify-start flex sm:justify-end gap-y-1 sm:gap-y-0 gap-x-4">
                                            <GitHubButton
                                                href="https://github.com/ferdiunal/refine-shadcn/tree/main/examples/react-csr-vite"
                                                data-color-scheme="no-preference: light; light: light; dark: dark;"
                                                data-size="large"
                                                aria-label="Use this template ferdiunal/refine-shadcn on GitHub"
                                            >
                                                Use this example
                                            </GitHubButton>
                                            <GitHubButton
                                                href="https://github.com/ferdiunal/refine-shadcn"
                                                data-color-scheme="no-preference: light; light: light; dark: dark;"
                                                data-size="large"
                                                data-show-count="true"
                                                aria-label="Star ferdiunal/refine-shadcn on GitHub"
                                            >
                                                Star
                                            </GitHubButton>
                                            <GitHubButton
                                                href="https://github.com/ferdiunal"
                                                data-color-scheme="no-preference: light; light: light; dark: dark;"
                                                data-size="large"
                                                data-show-count="true"
                                                aria-label="Follow @ferdiunal on GitHub"
                                            >
                                                Follow @ferdiunal
                                            </GitHubButton>
                                        </div>
                                    </div>
                                }
                                navCollapsedSize={4}
                                logo={{
                                    default: (
                                        <>
                                            <div className="inline-flex items-center gap-x-4">
                                                <img
                                                    src={LogoMini}
                                                    alt="Refine"
                                                    className="w-8 h-8"
                                                />
                                                <h3 className="font-bold text-xl">
                                                    Refine Admin
                                                </h3>
                                            </div>
                                        </>
                                    ),
                                    collapsed: (
                                        <img src={LogoMini} alt="Refine" />
                                    ),
                                }}
                            >
                                <Outlet />
                            </DefaultLayout>
                        }
                    >
                        <Route
                            index
                            element={
                                <NavigateToResource resource="dashboard" />
                            }
                        />
                        <Route
                            path="/dashboard"
                            index
                            element={<Dashboard />}
                        />
                        <Route path="/posts">
                            <Route index element={<PostList />} />
                            <Route path="create" element={<PostCreate />} />
                            <Route path="edit/:id" element={<PostEdit />} />
                            <Route path="show/:id" element={<PostShow />} />
                        </Route>
                        <Route path="/users">
                            <Route index element={<UserList />} />
                            <Route path="create" element={<UserCreate />} />
                            <Route path="edit/:id" element={<UserEdit />} />
                            <Route path="show/:id" element={<UserShow />} />
                        </Route>
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
            </Refine>
        </BrowserRouter>
    );
}

export default App;
