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

    // Create a new FormData instance for the ClipDrop API
    const clipDropFormData = new FormData();
    clipDropFormData.append("image_file", image);

    const response = await fetch(
      "https://clipdrop-api.co/remove-background/v1",
      {
        method: "POST",
        headers: {
          "x-api-key": process.env.CLIPDROP_API_KEY || "",
        },
        body: clipDropFormData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("ClipDrop API error:", errorText);
      throw new Error(`Failed to process image: ${errorText}`);
    }

    const processedImageBuffer = await response.arrayBuffer();

    return new NextResponse(processedImageBuffer, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error("Error processing image:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
