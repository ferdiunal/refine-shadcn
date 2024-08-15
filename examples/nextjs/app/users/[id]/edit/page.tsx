"use client";
import { EditPage } from "@ferdiunal/refine-admin";
import { UserForm } from "../../components/Form";

const UserEdit = () => {
    return (
        <EditPage>
            <UserForm redirect="edit" />
        </EditPage>
    );
};

export default UserEdit;
