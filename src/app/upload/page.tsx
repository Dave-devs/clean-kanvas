"use client";

import { useToast } from "@/hooks/use-taost";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImageIcon, Loader2, Upload } from "lucide-react";
import { Button } from "@/components/ui-custom/Button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const UploadImage = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  // Handlers for when files are dropped or selected
  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    // Validate if the uploaded file is an image
    const file = acceptedFiles[0];
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    // Set the original image and reset processed image state
    setOriginalImage(URL.createObjectURL(file));
    setProcessedImage(null);
    setProgress(0);
    await processImage(file);
  };

  // Configure dropzone with accepted file types and limits
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxFiles: 1,
  });

  // Function to process the image and remove background
  const processImage = async (file: File) => {
    try {
      setIsProcessing(true);
      setProgress(20);

      // Prepare form data for API request
      const formData = new FormData();
      formData.append("image", file);

      setProgress(40);
      // Send image to backend API for processing
      const response = await fetch("/api/remove-bg", {
        method: "POST",
        body: formData,
      });

      setProgress(80);

      if (!response.ok) {
        throw new Error("Failed to process image");
      }

      // Convert response to blob and create URL
      const blob = await response.blob();
      setProcessedImage(URL.createObjectURL(blob));
      setProgress(100);

      toast({
        title: "Success!",
        description: "Background removed successfully",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to process image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-[75vh] bg-hero-pattern p-4 sm:p-6 md:p-8 lg:p-12 pt-24 antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4 mt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
            Background Removal Tool
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your images instantly with our AI-powered background
            removal technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="border-blue-100 shadow-lg shadow-blue-100/20">
            <CardHeader>
              <CardTitle className="text-blue-900">Upload Image</CardTitle>
              <CardDescription>
                Drop your image here or click to browse
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div
                {...getRootProps()}
                className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-200 hover:border-primary/70 ${
                  isDragActive
                    ? "border-primary bg-primary/5 scale-[0.99]"
                    : "border-blue-200"
                }`}
              >
                <input {...getInputProps()} />
                <div className="text-center space-y-4">
                  <div className="mx-auto size-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Upload
                      className="size-8 text-primary "
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-blue-700 mb-1">
                      {isDragActive
                        ? "Drop the image here"
                        : "Drag & drop an image, or click to select"}
                    </p>
                    <p className="text-xs text-blue-600/70 ">
                      Supports JPG, JPEG, PNG
                    </p>
                  </div>
                </div>
              </div>

              {originalImage && (
                <div className="relative rounded-lg overflow-hidden bg-blue-50">
                  <div className="aspect-[4/3]">
                    <Image
                      src={originalImage}
                      alt="Original"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm flex items-center justify-center">
                    <p className="text-lg font-medium text-blue-900">
                      Original Image
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Result Section */}
          <Card className="border-blue-100 shadow-lg shadow-blue-100/20">
            <CardHeader>
              <CardTitle className="text-blue-900">Result</CardTitle>
              <CardDescription>
                Your image with background removed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {isProcessing && (
                <div className="space-y-4 bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    <p className="text-sm text-blue-700">
                      Processing your image...
                    </p>
                  </div>
                  <Progress value={progress} className="h-2 bg-blue-100" />
                </div>
              )}

              {processedImage ? (
                <div className="relative rounded-lg overflow-hidden bg-[url('/checkerboard.png')]">
                  <div className="aspect-[4/3]">
                 
                    <Image
                      src={processedImage}
                      alt="Processed"
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-blue-900/10  backdrop-blur-sm flex items-center justify-center">
                    <p className="text-lg font-medium text-blue-900 ">
                      Background Removed
                    </p>
                  </div>
                  <Button
                    className="absolute bottom-4 right-4 shadow-lg bg-primary hover:bg-blue-600 text-white"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = processedImage;
                      link.download = "processed-image.png";
                      link.click();
                    }}
                  >
                    Download
                  </Button>
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-blue-200 p-8">
                  <div className="text-center space-y-4">
                    <div className="mx-auto size-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <ImageIcon
                        className="size-8 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm text-blue-700">
                      Your processed image will appear here
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default UploadImage;
