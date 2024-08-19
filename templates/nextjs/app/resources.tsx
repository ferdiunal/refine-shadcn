import { Home, NewspaperIcon, User2 } from "lucide-react";
import type { ResourceProps } from "@refinedev/core";

export const resources: ResourceProps[] = [
    {
        name: "dashboard",
        list: "/dashboard",
        meta: {
            title: "Dashboard",
            icon: <Home className="h-4 w-4" />,
        },
    },
    {
        name: "posts",
        list: "/posts",
        show: "/posts/:id",
        create: "/posts/create",
        edit: "/posts/:id/edit",
        meta: {
            title: "Posts",
            icon: <NewspaperIcon className="h-4 w-4" />,
        },
    },
    {
        name: "users",
        list: "/users",
        show: "/users/:id",
        create: "/users/create",
        edit: "/users/:id/edit",
        meta: {
            title: "Users",
            icon: <User2 className="h-4 w-4" />,
        },
    },
];
