"use server";

import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const deletePost = async (postId: number) => {
  "use server";
  await db.delete(postsTable).where(eq(postsTable.id, postId));

  redirect("/");
};


export const createPost = async ( prevState: { error: string | null },formData: FormData) => {
  "use server";

  
  const title = formData?.get("title")
  const content = formData?.get("content")
  if (!title || !content) {
    return {
      error: "Title and content are required",
    };
  }




  await db.insert(postsTable).values({ 
    title: title.toString(),
    content: content.toString(),
   });
   
  redirect('/')
};
