import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 }
      );
    }

    const REMOVE_BG_API_KEY = process.env.REMOVE_BG_API_KEY;

    if (!REMOVE_BG_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const imageBuffer = Buffer.from(await image.arrayBuffer());

    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": REMOVE_BG_API_KEY,
      },
      body: imageBuffer,
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to remove background" },
        { status: response.status }
      );
    }

    const processedImage = await response.arrayBuffer();

    return new NextResponse(processedImage, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.log("Error processing image: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
