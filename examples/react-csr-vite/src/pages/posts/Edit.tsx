import { EditPage } from "@ferdiunal/refine-admin";
import { PostForm } from "./Form";

type Props = {};

const PostEdit = (props: Props) => {
    return (
        <EditPage>
            <PostForm redirect="edit" />
        </EditPage>
    );
};

export default PostEdit;
