import { generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request){

    const {userId} = auth();
    if(!userId){
        return new NextResponse('Unauthorized', {status: 401})
    }


    const body = await req.json();
    const {name} = body;

    const image_description = await generateImagePrompt(name);
    if (!image_description) {
        return new NextResponse("failed to generate image description", {
          status: 500,
        });
      }

    return new NextResponse('ok')
}