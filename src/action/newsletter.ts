"use server";
export const registerNewsletter = async (formData) => {
  const email = formData.get("email");
  const res = await fetch("http://localhost:3000/api/newsletter", {
    method: "POST",
    body: JSON.stringify(email),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log(data);
};
