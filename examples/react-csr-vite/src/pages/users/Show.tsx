import { IResourceComponentsProps, useOne, useShow } from "@refinedev/core";
import { ShowPage } from "@ferdiunal/refine-admin";
import { ICategory, IUser } from "./Form";
const UserShow: React.FC<IResourceComponentsProps> = () => {
    const {
        query: { data },
    } = useShow<IUser>();
    const record = data?.data;

    const { data: categoryData, isLoading: categoryIsLoading } =
        useOne<ICategory>({
            resource: "categories",
            id: record?.category.id || "",
            queryOptions: {
                enabled: !!record,
            },
        });

    return (
        <ShowPage>
            <ShowPage.Row title="ID" children={record?.id as number} />
            <ShowPage.Row
                title="Title"
                children={record?.title?.toString() || ""}
            />
            <ShowPage.Row
                title="Category"
                children={
                    categoryIsLoading
                        ? "Loading..."
                        : categoryData?.data.title?.toString() || ""
                }
            />
            <ShowPage.Row
                title="Content"
                children={record?.content?.toString() || ""}
            />
        </ShowPage>
    );
};

export default UserShow;