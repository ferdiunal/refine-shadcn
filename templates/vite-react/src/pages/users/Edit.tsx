import { EditPage } from "@ferdiunal/refine-shadcn";
import { UserForm } from "./Form";

const UserEdit = () => {
    return (
        <EditPage>
            <UserForm redirect="edit" />
        </EditPage>
    );
};

export default UserEdit;
