import { DeleteButton, EditButton } from "@/buttons";
import { Breadcrumbs, PageHeader } from "@/components";
import { ShowProps } from "@/types";
import {
    useRefineContext,
    useResource,
    useTranslate,
    useUserFriendlyName,
} from "@refinedev/core";
import { FC, isValidElement } from "react";
import { Row } from "./row";

export const ShowPage: FC<ShowProps> & {
    Row: typeof Row;
} = ({
    title,
    resource: resourceFromProps,
    breadcrumb: breadcrumbFromProps,
    isEdit = true,
    isDelete = true,
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
                        `Show ${getUserFriendlyName(
                            resource?.meta?.label ??
                                resource?.options?.label ??
                                resource?.label ??
                                identifier,
                            "singular",
                        )}`,
                    )
                }
                breadcrumb={
                    isValidElement(breadcrumb) ? breadcrumb : <Breadcrumbs />
                }
                isBack
                extra={
                    extra ?? (
                        <div className="inline-flex items-center gap-x-2">
                            {isEdit && (
                                <EditButton resource={resourceFromProps} />
                            )}
                            {isDelete && (
                                <DeleteButton resource={resourceFromProps} />
                            )}
                        </div>
                    )
                }
            />
            <div className="relative pt-4 !mt-0">{children}</div>
        </>
    );
};

ShowPage.Row = Row;
ShowPage.displayName = "ShowPage";
