"use client";
import { CreatePage } from "@ferdiunal/refine-admin";
import { PostForm } from "../components/Form";
export default function Home() {
  return (
    <CreatePage>
      <PostForm redirect="edit" />
    </CreatePage>
  );
}
