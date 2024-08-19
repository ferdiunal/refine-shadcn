"use client";
import { Combobox, Field, Form, Select } from "@ferdiunal/refine-shadcn";
import { zodResolver } from "@hookform/resolvers/zod";
import { RedirectAction, useSelect } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export interface ICategory {
    id: number;
    title: string;
}

export interface IPost {
    id: number;
    title: string;
    content: string;
    status: "published" | "draft" | "rejected";
    category: { id: number };
}

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    content: z.string().min(2, {
        message: "Content must be at least 2 characters.",
    }),
    status: z.enum(["published", "draft", "rejected"], {
        errorMap: () => ({
            message: "Status must be published, draft, or rejected.",
        }),
    }),
    category: z.string().or(z.number()),
});

export const PostForm = ({
    redirect = "edit",
}: {
    redirect: RedirectAction;
}) => {
    const { ...form } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "all",
        defaultValues: {
            title: "",
            status: "",
            content: "",
            category: {
                id: "",
            },
        },
        refineCoreProps: {
            autoSave: {
                enabled: true,
            },
            redirect,
        },
        warnWhenUnsavedChanges: true,
    });

    const postData = form.refineCore.queryResult?.data?.data;
    const category = useSelect<ICategory>({
        resource: "categories",
        // @ts-ignore
        defaultValue: postData?.category?.id || "",
    });

    return (
        <>
            <Form {...form}>
                <Field {...form} name="title" label="Title">
                    <Input placeholder="Title" />
                </Field>
                <div className="inline-flex flex-row items-center justify-start gap-x-4">
                    <Field {...form} name="category" label="Category">
                        <Combobox
                            disabled={category.query.isLoading}
                            options={category.options}
                        />
                    </Field>
                    <Field {...form} name="status" label="Status">
                        <Select
                            options={[
                                {
                                    label: "Published",
                                    value: "published",
                                },
                                {
                                    label: "Draft",
                                    value: "draft",
                                },
                                {
                                    label: "Rejected",
                                    value: "rejected",
                                },
                            ]}
                        />
                    </Field>
                </div>
                <Field {...form} name="content" label="Content">
                    <Textarea placeholder="Content" rows={10} />
                </Field>
            </Form>
        </>
    );
};
