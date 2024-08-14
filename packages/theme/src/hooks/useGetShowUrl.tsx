import {
    AccessControlContext,
    CanReturnType,
    useCan,
    useNavigation,
    useResource,
    useTranslate,
} from "@refinedev/core";
import { useContext } from "react";

type GetShowUrlReturnType = CanReturnType & {
    url: string;
};

export const useGetShowUrl = (
    resource: string,
    recordItemId: string,
    meta?: any,
): GetShowUrlReturnType => {
    const accessControlContext = useContext(AccessControlContext);
    const accessControlEnabled =
        accessControlContext.options.buttons.enableAccessControl;

    const hideIfUnauthorized =
        accessControlContext.options.buttons.hideIfUnauthorized;

    const { showUrl: generateShowUrl } = useNavigation();

    const { id, resource: _resource } = useResource(resource);

    const { data } = useCan({
        resource: resource,
        action: "show",
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

    const showUrl =
        resource && (recordItemId || id)
            ? generateShowUrl(resource, recordItemId! ?? id!, meta)
            : "";

    return {
        can: !Boolean(accessControlEnabled && hideIfUnauthorized && !data?.can),
        reason: reason(),
        url: showUrl,
    };
};
