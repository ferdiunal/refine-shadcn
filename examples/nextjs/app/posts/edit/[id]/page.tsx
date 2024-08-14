"use client";
import { EditPage } from "@ferdiunal/refine-admin";
import { PostForm } from "../../components/Form";
export default function Home() {
  return (
    <EditPage>
      <PostForm redirect="edit" />
    </EditPage>
  );
}
