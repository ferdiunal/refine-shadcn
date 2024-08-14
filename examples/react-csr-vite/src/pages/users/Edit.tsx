import { EditPage } from "@ferdiunal/refine-admin";
import { UserForm } from "./Form";

type Props = {};

const UserEdit = (props: Props) => {
    return (
        <EditPage>
            <UserForm redirect="edit" />
        </EditPage>
    );
};

export default UserEdit;
