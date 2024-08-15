import { CreatePage } from "@ferdiunal/refine-admin";
import { UserForm } from "./Form";

const UserCreate = () => {
    return (
        <CreatePage>
            <UserForm redirect="edit" />
        </CreatePage>
    );
};

export default UserCreate;
