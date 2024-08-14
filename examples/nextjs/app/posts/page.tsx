"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ListPage, Table, TableFilterProps } from "@ferdiunal/refine-admin";
import { useUserFriendlyName } from "@refinedev/core";
import { Edit, Eye, Trash2 } from "lucide-react";

export default function Home() {
  const friendly = useUserFriendlyName();
  return (
    <ListPage>
      <Table
        enableSorting
        enableFilters
        refineCoreProps={{
          syncWithLocation: true,
        }}
      >
        <Table.Column
          accessorKey="id"
          id={"select"}
          header={({ table }) => {
            return (
              <Table.CheckAll table={table}>
                <DropdownMenuItem onSelect={() => alert("Delete Selected")}>
                  Delete Selected ({table.getSelectedRowModel().rows.length}){" "}
                  {friendly(
                    "Row",
                    table.getSelectedRowModel().rows.length > 1
                      ? "plural"
                      : "singular"
                  )}
                </DropdownMenuItem>
              </Table.CheckAll>
            );
          }}
          cell={({ row }) => (
            <Checkbox
              className="translate-y-[2px]"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
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
          header={"Title"}
          accessorKey="title"
          id="title"
          enableSorting
          enableHiding
          filter={(props: TableFilterProps) => (
            <Table.Filter.Search {...props} title="Search Title" />
          )}
        />
        <Table.Column
          header={"Status"}
          accessorKey="status"
          id="status"
          enableSorting
          enableHiding
          filter={(props: TableFilterProps) => (
            <Table.Filter.Dropdown
              {...props}
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
          )}
        />
        <Table.Column
          header={"CreatedAt"}
          accessorKey="createdAt"
          id="createdAt"
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
                resource="posts"
                icon={<Eye size={16} />}
              />
              <Table.EditAction
                title="Edit"
                row={original}
                resource="posts"
                icon={<Edit size={16} />}
              />
              <Table.DeleteAction
                title="Delete"
                row={original}
                withForceDelete={true}
                resource="posts"
                icon={<Trash2 size={16} />}
              />
            </Table.Actions>
          )}
        />
      </Table>
    </ListPage>
  );
}
