import fs from "node:fs";
import path from "node:path";
import { v4 as uuidv4 } from "uuid";

interface ApiResponse {
  data: any;
  success: boolean;
  message: string;
}

export const GET = (request: Request) => {
  const filePath: string = buildFeedbackPath();

  // Extract feedback data
  const data = extractFeedback(filePath);

  const response: ApiResponse = {
    data,
    success: true,
    message: "successfully",
  };

  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
  });
};

export const POST = async (request: Request) => {
  const requestData = await request.json(); // Parse JSON body

  const newComment = { id: uuidv4(), ...requestData };

  const filePath: string = buildFeedbackPath();

  // Extract feedback data
  let data = extractFeedback(filePath);

  // Ensure data is always an array
  if (!Array.isArray(data)) {
    data = [];
  }

  // Append the new feedback
  data.push(newComment);

  // Write the updated data back to the file
  fs.writeFileSync(filePath, JSON.stringify(data), "utf-8"); // Specify encoding to write as string

  const response: ApiResponse = {
    data: newComment,
    success: true,
    message: "successfully",
  };

  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
  });
};

const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "comment.json");
};

const extractFeedback = (filePath: string) => {
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
