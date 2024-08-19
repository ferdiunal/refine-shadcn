import { EditPage } from "@ferdiunal/refine-shadcn";
import { PostForm } from "./Form";

const PostEdit = () => {
    return (
        <EditPage>
            <PostForm redirect="edit" />
        </EditPage>
    );
};

export default PostEdit;
