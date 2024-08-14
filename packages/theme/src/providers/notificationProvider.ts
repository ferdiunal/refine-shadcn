import { NotificationProvider } from "@refinedev/core";
import { toast } from "sonner";

export const notificationProvider: NotificationProvider = {
    open: ({ key, message, description, type }) => {
        if (type === "success") {
            toast.success(message, { description, id: key });
        }

        if (type === "error") {
            toast.error(message, { description, id: key });
        }

        if (type === "progress") {
            toast.loading(message, { description, id: key });
        }
    },
    close: (key) => toast.dismiss(key),
};

export const useNotificationProvider = (): NotificationProvider => {
    return notificationProvider;
};
