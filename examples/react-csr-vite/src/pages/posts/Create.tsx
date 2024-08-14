import { CreatePage } from "@ferdiunal/refinedev-shadcn-ui";
import { PostForm } from "./Form";
type Props = {};

const PostCreate = (props: Props) => {
    return (
        <CreatePage>
            <PostForm redirect="edit" />
        </CreatePage>
    );
};

export default PostCreate;
