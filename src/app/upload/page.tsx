/* eslint-disable @next/next/no-img-element */
"use client"

import { useToast } from '@/hooks/use-taost';
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { ImageIcon, Upload } from 'lucide-react';
import { Button } from '@/components/ui-custom/Button';
import { Progress } from '@/components/ui/progress';

const UploadImage = () => {
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [processedImage, setProcessedImage] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const { toast } = useToast();

    const onDrop = async (acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) return;

        const file = acceptedFiles[0];
        if (!file.type.startsWith('image/')) {
            toast({
                title: "Invalid file type",
                description: "Please upload an image file",
                variant: "destructive"
            })
            return;
        }

        setOriginalImage(URL.createObjectURL(file));
        setProcessedImage(null);
        setProgress(0);
        await processImage(file)
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".png", ".jpg", ".jpeg"]
        },
        maxFiles: 1
    });

    const processImage = async (file: File) => {
        try {
            setIsProcessing(true);
            setProgress(20);

            const formData = new FormData();
            formData.append("image", file);

            setProgress(40);
            const response = await fetch("/api/remove-bg", {
                method: "POST",
                body: formData,
            });

            setProgress(80);

            if (!response.ok) {
                throw new Error("Failed to process image");
            }

            const blob = await response.blob();
            setProcessedImage(URL.createObjectURL(blob));
            setProgress(100);

            toast({
                title: "Success!",
                description: "Background removed successfully",
            })
        } catch (error) {
            console.error(error)
            toast({
                title: "Error",
                description: `Failed to process image. Please try again. ${error}`,
                variant: "destructive"
            })
        } finally {
            setIsProcessing(false);
        }
    }

    return (
        <main className='min-h-screen mx-auto bg-white p-4 sm:p-6 md:p-8 lg:p-12'>
            <div className='section-container max-w-7xl max-auto'>
                {/* Header Texts */}
                <div className='text-center mb-8 sm:mb-12'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Background Removal Tool
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Upload an image and we&apos;ll remove the background instantly
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8'>
                    {/* Upload Section */}
                    <div className="space-y-4 sm:space-y-6">
                        <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-6 sm:p-8 md:p-12 transition-all duration-200 hover:border-primary/70 ${isDragActive
                                ? 'border-primary bg-primary/5 scale-[0.99]'
                                : 'border-gray-300'
                            }`}>
                            <input {...getInputProps()} />
                            <div className="text-center">
                                <Upload
                                    className="mx-auto size-10 sm:h-12 sm:w-12 text-gray-400 mb-2 sm:mb-3"
                                    aria-hidden="true"
                                />
                                <p className="text-sm sm:text-base text-gray-600 mb-1">
                                    {isDragActive
                                        ? 'Drop the image here'
                                        : 'Drag & drop an image, or click to select'}
                                </p>
                            </div>
                        </div>
                        {originalImage && (
                            <div className="relative rounded-lg overflow-hidden bg-white shadow-lg transition-transform hover:scale-[1.02]">
                                <div className="aspect-[4/3]">
                                    <img
                                        src={originalImage}
                                        alt="Original"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                                    <p className="text-white text-base sm:text-lg font-medium px-4 text-center">
                                        Original Image
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Result Section */}
                    <div className="space-y-4 sm:space-y-6">
                        {isProcessing && (
                            <div className="space-y-3 sm:space-y-4 bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 lg:pb-12">
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                    Processing your image...
                                </p>
                                <Progress value={progress} className="h-2 sm:h-3" />
                            </div>
                        )}

                        {processedImage ? (
                            <div className="relative rounded-lg overflow-hidden bg-[url('/checkerboard.png')] shadow-lg transition-transform hover:scale-[1.02]">
                                <div className="aspect-[4/3]">
                                    <img
                                        src={processedImage}
                                        alt="Processed"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                                    <p className="text-white text-base sm:text-lg font-medium px-4 text-center">
                                        Background Removed
                                    </p>
                                </div>
                                <Button
                                    className="absolute bottom-4 right-4 shadow-lg hover:shadow-xl transition-all duration-200"
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = processedImage;
                                        link.download = 'processed-image.png';
                                        link.click();
                                    }}
                                >
                                    Download
                                </Button>
                            </div>
                        ) : (
                            <div className="rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 sm:p-8 md:p-12">
                                <div className="text-center">
                                    <ImageIcon
                                        className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mb-2 sm:mb-3"
                                        aria-hidden="true"
                                    />
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                        Processed image will appear here
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default UploadImage