"use client";

import { EditPage } from "@ferdiunal/refine-admin";
import { PostForm } from "@/app/posts/components/Form";

const PostEdit = () => {
    return (
        <EditPage>
            <PostForm redirect="edit" />
        </EditPage>
    );
};

export default PostEdit;
