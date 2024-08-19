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
