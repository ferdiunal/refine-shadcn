import { DeleteButton, ShowButton } from "@/buttons";
import { Breadcrumbs, PageHeader } from "@/components";
import { EditProps } from "@/types";
import {
    useRefineContext,
    useResource,
    useTranslate,
    useUserFriendlyName,
} from "@refinedev/core";
import { FC, isValidElement } from "react";

export const EditPage: FC<EditProps> = ({
    title,
    resource,
    extra,
    breadcrumb: breadcrumbFromProps,
    children,
}) => {
    const translate = useTranslate();
    const { options: { breadcrumb: globalBreadcrumb } = {} } =
        useRefineContext();

    const getUserFriendlyName = useUserFriendlyName();

    const { resource: _resource, identifier } = useResource(resource);

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
                        `Edit ${getUserFriendlyName(
                            _resource?.meta?.label ??
                                _resource?.options?.label ??
                                _resource?.label ??
                                identifier,
                            "plural",
                        )}`,
                    )
                }
                isBack
                breadcrumb={
                    isValidElement(breadcrumb) ? breadcrumb : <Breadcrumbs />
                }
                extra={
                    extra ?? (
                        <div className="inline-flex flex-row items-center gap-x-2">
                            <ShowButton resource={resource} />
                            <DeleteButton resource={resource} />
                        </div>
                    )
                }
            />
            <div className="pt-4">{children}</div>
        </>
    );
};

EditPage.displayName = "EditPage";
