import { DefaultLayout, notificationProvider } from "@ferdiunal/refine-admin";
import "@ferdiunal/refine-admin/dist/globals.css";
import { I18nProvider, Refine } from "@refinedev/core";
import routerProvider, {
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import Cookie from "js-cookie";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import LogoMini from "./assets/logo-mini.svg";
import Logo from "./assets/logo.svg";
import Dashboard from "./pages/Dashboard";
import PostCreate from "./pages/posts/Create";
import PostEdit from "./pages/posts/Edit";
import PostList from "./pages/posts/list";
import PostShow from "./pages/posts/Show";
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
                                navCollapsedSize={4}
                                logo={{
                                    default: <img src={Logo} alt="Refine" />,
                                    collapsed: (
                                        <img src={LogoMini} alt="Refine" />
                                    ),
                                }}
                            >
                                <Outlet />
                            </DefaultLayout>
                        }
                    >
                        <Route index element={<NavigateToResource />} />
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
                    </Route>
                </Routes>
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
            </Refine>
        </BrowserRouter>
    );
}

export default App;
