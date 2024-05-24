"use server";

import { revalidatePath } from "next/cache";

export const addComment = async (formData) => {
  const email = formData.get("email");
  const name = formData.get("name");
  const comment = formData.get("comment");
  const res = await fetch("http://localhost:3000/api/comments", {
    method: "POST",
    body: JSON.stringify({ email, name, comment }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log(data);
  revalidatePath("/events");
};
