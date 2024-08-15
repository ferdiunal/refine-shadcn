import { ListButton } from "@/buttons";
import { Breadcrumbs, PageHeader } from "@/components";
import { CreateProps } from "@/types";
import {
    useRefineContext,
    useResource,
    useTranslate,
    useUserFriendlyName,
} from "@refinedev/core";
import React, { isValidElement, ReactNode } from "react";

export const CreatePage: React.FC<CreateProps> = ({
    title,
    resource: resourceFromProps,
    breadcrumb: breadcrumbFromProps,
    extra,
    children,
}): ReturnType<React.FC<CreateProps>> => {
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
                        `Create ${getUserFriendlyName(
                            resource?.meta?.label ?? identifier,
                            "singular",
                        )}`,
                    )
                }
                isBack
                breadcrumb={
                    isValidElement(breadcrumb) ? breadcrumb : <Breadcrumbs />
                }
                extra={
                    extra ?? (
                        <>
                            <ListButton resource={resourceFromProps} />
                        </>
                    )
                }
            />
            <div className="pt-4 !mt-0">{children as ReactNode}</div>
        </>
    );
};

CreatePage.displayName = "CreatePage";
