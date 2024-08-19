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
