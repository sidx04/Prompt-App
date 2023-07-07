import Prompt from "@models/Prompt";
import { connectDB } from "@utils/db";

export const GET = async (req) => {
  try {
    await connectDB();
    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all prompt posts...", { status: 500 });
  }
};
