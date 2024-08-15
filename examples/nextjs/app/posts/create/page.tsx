"use client";
import { CreatePage } from "@ferdiunal/refine-admin";
import { PostForm } from "@/app/posts/components/Form";

const PostCreate = () => {
    return (
        <CreatePage>
            <PostForm redirect="edit" />
        </CreatePage>
    );
};

export default PostCreate;
