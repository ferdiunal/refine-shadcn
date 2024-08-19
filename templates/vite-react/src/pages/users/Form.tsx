import { Field, Form } from "@ferdiunal/refine-shadcn";
import { zodResolver } from "@hookform/resolvers/zod";
import { RedirectAction } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "Firstname must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Lastname must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
});

export const UserForm = ({
    redirect = "edit",
}: {
    redirect: RedirectAction;
}) => {
    const { ...form } = useForm<z.infer<typeof formSchema>>({
        mode: "all",
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        refineCoreProps: {
            autoSave: {
                enabled: true,
            },
            redirect,
        },
        warnWhenUnsavedChanges: true,
    });

    return (
        <>
            <Form {...form}>
                <Field {...form} name="firstName" label="Firstname">
                    <Input placeholder="Firstname" />
                </Field>
                <Field {...form} name="lastName" label="Lastname">
                    <Input placeholder="Lastname" />
                </Field>
                <Field {...form} name="email" label="Email">
                    <Input placeholder="email" type="email" />
                </Field>
            </Form>
        </>
    );
};
