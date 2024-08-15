import { CreatePage } from "@ferdiunal/refine-admin";
import { PostForm } from "./Form";

const PostCreate = () => {
    return (
        <CreatePage>
            <PostForm redirect="edit" />
        </CreatePage>
    );
};

export default PostCreate;
