"use client";
import { CreatePage } from "@ferdiunal/refine-shadcn";
import { PostForm } from "@/app/posts/components/Form";

const PostCreate = () => {
    return (
        <CreatePage>
            <PostForm redirect="edit" />
        </CreatePage>
    );
};

export default PostCreate;
