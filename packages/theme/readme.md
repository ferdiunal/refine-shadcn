# refine-shadcn

This package is a theme integration for [refine.dev](https://refine.dev) built using [ui.shadcn](ui.shadcn.com).

# Previews 💪

### [Vite Example](https://refine-shadcn-vite.vercel.app)
### [Nextjs Example](https://refine-shadcn-nextjs.vercel.app)


## Install

```bash

npm install @ferdiunal/refine-shadcn

```
or
```bash

yarn add @ferdiunal/refine-shadcn

```

## Useage

**For Vite**

[You can use the layout structure prepared for Vite.js from this link](templates/vite-react/src/App.tsx)

**For NexJs**

[You can use the layout structure prepared for Next.js from this link](templates/nextjs/app/app-layout.tsx)

### List Page

The List Page displays a table or a grid of records fetched from a data source. It typically includes features like filtering, sorting, bulk actions, and pagination to help users navigate through large sets of data efficiently.

<details>
  <summary>Code Example</summary>

```tsx
import { ListPage, Table, TableFilterProps } from "@ferdiunal/refine-shadcn";
import { AvatarImage } from "@radix-ui/react-avatar";
import { BaseRecord, HttpError, useUserFriendlyName } from "@refinedev/core";
import type { UseTableReturnType } from "@refinedev/react-table";
import { Edit, Eye, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

const UserList = () => {
    const friendly = useUserFriendlyName();
    const bulkDeleteAction = (
        table: UseTableReturnType<BaseRecord, HttpError>,
    ) => {
        const label = `Delete Selected (${
            table.getSelectedRowModel().rows.length
        }) ${friendly(
            "Row",
            table.getSelectedRowModel().rows.length > 1 ? "plural" : "singular",
        )}`;

        return {
            label,
            onClick: () => {
                alert("Delete Selected");
            },
        };
    };
    return (
        <ListPage>
            <Table enableSorting enableFilters>
                <Table.Column
                    accessorKey="id"
                    id={"select"}
                    header={({ table }) => (
                        <Table.CheckAll
                            options={[bulkDeleteAction(table)]}
                            table={table}
                        />
                    )}
                    cell={({ row }) => (
                        <Checkbox
                            className="translate-y-[2px]"
                            checked={row.getIsSelected()}
                            onCheckedChange={(value) =>
                                row.toggleSelected(!!value)
                            }
                            aria-label="Select row"
                            key={`checkbox-${row.original.id}`}
                        />
                    )}
                />
                <Table.Column
                    header={"ID"}
                    id="id"
                    accessorKey="id"
                    enableSorting
                    enableHiding
                />
                <Table.Column
                    header={"Avatar"}
                    id="avatar"
                    accessorKey="avatar"
                    cell={({ row }) =>
                        row.original.avatar?.[0]?.url && (
                            <Avatar>
                                <AvatarImage
                                    src={row.original.avatar[0].url}
                                    alt={row.original.avatar[0].name}
                                />
                                <AvatarFallback>
                                    {row.original.firstName[0]}
                                    {row.original.lastName[0]}
                                </AvatarFallback>
                            </Avatar>
                        )
                    }
                />
                <Table.Column
                    header={"First Name"}
                    accessorKey="firstName"
                    id="firstName"
                    enableSorting
                    enableHiding
                />
                <Table.Column
                    header={"Last Name"}
                    accessorKey="lastName"
                    id="lastName"
                    enableSorting
                    enableHiding
                />
                <Table.Column
                    header={"Birthday"}
                    accessorKey="birthday"
                    id="birthday"
                    enableSorting
                    enableHiding
                    filter={(props: TableFilterProps) => (
                        <Table.Filter.DateRangePicker {...props} align="end" />
                    )}
                />
                <Table.Column
                    accessorKey={"id"}
                    id={"actions"}
                    cell={({ row: { original } }) => (
                        <Table.Actions>
                            <Table.ShowAction
                                title="Detail"
                                row={original}
                                resource="users"
                                icon={<Eye size={16} />}
                            />
                            <Table.EditAction
                                title="Edit"
                                row={original}
                                resource="users"
                                icon={<Edit size={16} />}
                            />
                            <Table.DeleteAction
                                title="Delete"
                                row={original}
                                withForceDelete={true}
                                resource="users"
                                icon={<Trash2 size={16} />}
                            />
                        </Table.Actions>
                    )}
                />
            </Table>
        </ListPage>
    );
};

export default UserList;
```
</details>

### Show Page
The Show Page is designed to display detailed information about a single record. It is a read-only view that presents the data in a structured format, often including related records and metadata to give users a comprehensive understanding of the selected item.

<details>
  <summary>Code Example</summary>

```tsx
import { ShowPage } from "@ferdiunal/refine-shadcn";
import { IResourceComponentsProps, useShow } from "@refinedev/core";
import { IUser } from "./Form";
const UserShow: React.FC<IResourceComponentsProps> = () => {
    const {
        query: { data },
    } = useShow<IUser>();
    const record = data?.data;

    return (
        <ShowPage>
            <ShowPage.Row title="ID" children={record?.id as number} />
            <ShowPage.Row
                title="First Name"
                children={record?.firstName?.toString() || ""}
            />
            <ShowPage.Row
                title="Last Name"
                children={record?.firstName?.toString() || ""}
            />
            <ShowPage.Row
                title="Email"
                children={record?.email?.toString() || ""}
            />
        </ShowPage>
    );
};

export default UserShow;
```
</details>

### Create Page
The Create Page allows users to input new data into the system. It provides a form where users can fill out the necessary fields to create a new record, ensuring that all required information is collected before submission.

<details>
  <summary>Code Example</summary>

```tsx
import { CreatePage } from "@ferdiunal/refine-shadcn";
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

const UserCreate = () => {
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
        <CreatePage>
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
        </CreatePage>
    );
};

export default UserCreate;
```
</details>

### Edit Page
The Edit Page enables users to modify existing records. It loads the current data into a form, allowing users to make updates and save changes. It usually includes validation to ensure that updates do not violate any data integrity rules.

<details>
  <summary>Code Example</summary>

```tsx
import { EditPage } from "@ferdiunal/refine-shadcn";
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

const UserEdit = () => {
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
        <EditPage>
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
        </EditPage>
    );
};

export default UserEdit;
```
</details>

## Screenshots

<img src="https://github.com/ferdiunal/refine-shadcn/blob/main/art/SCR-20240821-ddjg.png?v=1" />

<img src="https://github.com/ferdiunal/refine-shadcn/blob/main/art/SCR-20240821-ddlx.png?v=1" />

<img src="https://github.com/ferdiunal/refine-shadcn/blob/main/art/SCR-20240821-ddns.png?v=1" />

<img src="https://github.com/ferdiunal/refine-shadcn/blob/main/art/SCR-20240821-ddpm.png?v=1" />

<img src="https://github.com/ferdiunal/refine-shadcn/blob/main/art/SCR-20240821-ddrb.png?v=1" />

<img src="https://github.com/ferdiunal/refine-shadcn/blob/main/art/SCR-20240821-dfrd.png?v=1" />

# Sponsors

[<img src="https://avatars.githubusercontent.com/u/104967037?s=200&v=4" width="100">](https://github.com/refinedev)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
