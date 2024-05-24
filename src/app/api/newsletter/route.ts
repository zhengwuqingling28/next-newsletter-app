export const POST = async (request: Request) => {
  const email = await request.json();

  if (!email || !email.includes("@")) {
    return new Response(
      JSON.stringify({
        data: email,
        message: "Invalid Email",
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(
    JSON.stringify({
      data: email,
      message: "Signed Up!",
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
