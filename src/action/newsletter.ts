"use server";

interface NewsletterFormData {
  email: string;
}

export const registerNewsletter = async (formData: FormData) => {
  const email = formData.get("email") as string;

  const newsletterData: NewsletterFormData = { email };

  const res = await fetch("http://localhost:3000/api/newsletter", {
    method: "POST",
    body: JSON.stringify(newsletterData),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  console.log(data);
};
