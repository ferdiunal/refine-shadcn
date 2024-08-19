import { CreatePage } from "@ferdiunal/refine-shadcn";
import { PostForm } from "./Form";

const PostCreate = () => {
    return (
        <CreatePage>
            <PostForm redirect="edit" />
        </CreatePage>
    );
};

export default PostCreate;
