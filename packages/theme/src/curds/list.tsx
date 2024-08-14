"use client";

import { CreateButton } from "@/buttons";
import { Breadcrumbs, PageHeader } from "@/components";
import { cn } from "@/lib/utils";
import { ListProps } from "@/types";
import {
    useRefineContext,
    useResource,
    useTranslate,
    useUserFriendlyName,
} from "@refinedev/core";
import { FC, isValidElement } from "react";

export const ListPage: FC<ListProps> = ({
    title,
    resource: resourceFromProps,
    breadcrumb: breadcrumbFromProps,
    createButtonProps,
    className,
    isCreate = true,
    extra,
    children,
}) => {
    const translate = useTranslate();
    const { options: { breadcrumb: globalBreadcrumb } = {} } =
        useRefineContext();

    const getUserFriendlyName = useUserFriendlyName();

    const { resource, identifier } = useResource(resourceFromProps);

    const breadcrumb =
        typeof breadcrumbFromProps === "undefined"
            ? globalBreadcrumb
            : breadcrumbFromProps;

    return (
        <>
            <PageHeader
                title={
                    title ??
                    translate(
                        `${identifier}.titles.List`,
                        `List ${getUserFriendlyName(
                            resource?.meta?.label ??
                                resource?.options?.label ??
                                resource?.label ??
                                identifier,
                            "plural",
                        )}`,
                    )
                }
                breadcrumb={
                    isValidElement(breadcrumb) ? breadcrumb : <Breadcrumbs />
                }
                extra={
                    extra ?? (
                        <>
                            <div className="inline-flex flex-row gap-4">
                                {isCreate && (
                                    <CreateButton
                                        {...createButtonProps}
                                        resource={
                                            createButtonProps?.resource ??
                                            identifier
                                        }
                                    />
                                )}
                            </div>
                        </>
                    )
                }
            />
            <div className={cn("pt-2 sm:pt-4 !mt-0", className)}>
                {children}
            </div>
        </>
    );
};

ListPage.displayName = "ListPage";
