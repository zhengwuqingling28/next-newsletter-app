import fs from "node:fs";
import path from "node:path";

export const GET = (request: Request) => {
  const { pathname } = new URL(request.url);
  const slug = pathname.split("/").pop(); // Get id from URL
  if (slug) {
    const event = getEventBySlug(slug);
    if (event) {
      return Response.json({ data: event });
    } else {
      return Response.json({ error: "Feedback not found" }, { status: 404 });
    }
  } else {
    return Response.json({ error: "ID is required" }, { status: 400 });
  }
};

const getEventBySlug = (slug: string) => {
  const filePath = path.join(process.cwd(), "data", "event.json");
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const event = JSON.parse(fileData);
    return event.find((event: any) => event.slug === slug);
  }
  return null;
};
