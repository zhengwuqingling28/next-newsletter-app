import fs from "node:fs";
import path from "node:path";

export const GET = (request: Request) => {
  const filePath = buildFeedbackPath();

  // Extract feedback data
  const data = extractFeedback(filePath);

  return new Response(
    JSON.stringify({ data, success: true, message: "successfully" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "event.json");
};

const extractFeedback = (filePath) => {
  // Check if the file exists before reading
  if (fs.existsSync(filePath)) {
    // Read the file and parse it as JSON
    const fileData = fs.readFileSync(filePath, "utf-8"); // Specify encoding to get a string
    if (fileData) {
      return JSON.parse(fileData);
    }
  } else {
    // Create an empty file if it doesn't exist
    fs.writeFileSync(filePath, JSON.stringify([]), "utf-8");
    return []; // Ensure always return an array
  }
};
