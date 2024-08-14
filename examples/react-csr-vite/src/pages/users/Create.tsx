import { CreatePage } from "@ferdiunal/refine-admin";
import { UserForm } from "./Form";
type Props = {};

const UserCreate = (props: Props) => {
    return (
        <CreatePage>
            <UserForm redirect="edit" />
        </CreatePage>
    );
};

export default UserCreate;
