import { LayoutResource } from "@/types";
import { Slot } from "@radix-ui/react-slot";
import { useLink, useRouterContext, useRouterType } from "@refinedev/core";
import { forwardRef } from "react";

type LinkProps = LayoutResource["link"] & {
    asChild?: boolean;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ children, href, title, className, asChild }, ref) => {
        const { Link: LegacyLink } = useRouterContext();
        const routerType = useRouterType();
        const Link = useLink();

        const ActiveLink = routerType === "legacy" ? LegacyLink : Link;
        const Comp = asChild ? Slot : ActiveLink;

        return (
            <Comp ref={ref} to={href} className={className} title={title}>
                {children}
            </Comp>
        );
    },
);

Link.displayName = "Link";
