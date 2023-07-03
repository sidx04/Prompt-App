import Prompt from "@models/Prompt";
import { connectDB } from "@utils/db";

export const POST = async (req, res) => {
  const { userID, prompt, tag } = await req.json();
  try {
    await connectDB();
    const newPrompt = new Prompt({ creator: userID, prompt, tag });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new prompt!", { status: 500 });
  }
};
