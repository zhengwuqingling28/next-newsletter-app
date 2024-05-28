"use server";

interface CommentFormData {
  email: string;
  name: string;
  comment: string;
}

import { revalidatePath } from "next/cache";

export const addComment = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const comment = formData.get("comment") as string;

  if (!email || !name || !comment) {
    throw new Error("Form data is missing one or more fields");
  }

  const commentData: CommentFormData = { email, name, comment };

  const res = await fetch("http://localhost:3000/api/comments", {
    method: "POST",
    body: JSON.stringify(commentData),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log(data);
  revalidatePath("/events");
};
