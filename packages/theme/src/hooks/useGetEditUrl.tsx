import {
    AccessControlContext,
    CanReturnType,
    useCan,
    useNavigation,
    useResource,
    useTranslate,
} from "@refinedev/core";
import { useContext } from "react";

type GetEditUrlReturnType = CanReturnType & {
    url: string;
};

export const useGetEditUrl = (
    resource: string,
    recordItemId: string,
    meta?: any,
): GetEditUrlReturnType => {
    const accessControlContext = useContext(AccessControlContext);
    const accessControlEnabled =
        accessControlContext.options.buttons.enableAccessControl;

    const hideIfUnauthorized =
        accessControlContext.options.buttons.hideIfUnauthorized;

    const { editUrl: generateEditUrl } = useNavigation();

    const { id, resource: _resource } = useResource(resource);

    const { data } = useCan({
        resource: resource,
        action: "edit",
        params: { id: recordItemId, resource: _resource },
        queryOptions: {
            enabled: accessControlEnabled,
        },
    });

    const translate = useTranslate();

    const reason = () => {
        if (data?.can) return "";
        else if (data?.reason) return data.reason;
        else
            return translate(
                "buttons.notAccessTitle",
                "You don't have permission to access",
            );
    };

    const editUrl =
        resource && (recordItemId ?? id)
            ? generateEditUrl(resource, recordItemId! ?? id!, meta)
            : "";

    return {
        can: !Boolean(accessControlEnabled && hideIfUnauthorized && !data?.can),
        reason: reason(),
        url: editUrl,
    };
};
