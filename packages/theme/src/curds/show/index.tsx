import { DeleteButton, EditButton } from "@/buttons";
import { Breadcrumbs, PageHeader } from "@/components";
import { ShowProps } from "@/types";
import {
    useNavigation,
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
    canDelete = true,
    canEdit = true,
    extra,
    children,
}) => {
    const translate = useTranslate();
    const { options: { breadcrumb: globalBreadcrumb } = {} } =
        useRefineContext();

    const getUserFriendlyName = useUserFriendlyName();

    const { resource, identifier } = useResource(resourceFromProps);

    const { list } = useNavigation();

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
                            resource?.meta?.label ?? identifier,
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
                            {canEdit && (
                                <EditButton resource={resourceFromProps} />
                            )}
                            {canDelete && (
                                <DeleteButton
                                    resource={resourceFromProps}
                                    onSuccess={() => {
                                        list(resource?.name as string);
                                    }}
                                />
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
