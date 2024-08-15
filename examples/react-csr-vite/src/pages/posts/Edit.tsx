import { EditPage } from "@ferdiunal/refine-admin";
import { PostForm } from "./Form";

const PostEdit = () => {
    return (
        <EditPage>
            <PostForm redirect="edit" />
        </EditPage>
    );
};

export default PostEdit;
