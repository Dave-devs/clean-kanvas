import { CheckCircle, Image, Zap, LayoutGrid, CloudOff, Download } from "lucide-react";
export const features = [
    {
        icon: <Zap className="size-6 text-blue-500" />,
        title: "Instant Processing",
        description: "Remove backgrounds in seconds with our advanced AI technology, no waiting required.",
    },
    {
        icon: <Image className="size-6 text-blue-500" />,
        title: "Pixel-Perfect Results",
        description: "Our AI precisely detects edges and maintains fine details like hair and transparent objects.",
    },
    {
        icon: <CloudOff className="size-6 text-blue-500" />,
        title: "Privacy First",
        description: "All processing happens in your browser. Your images never leave your device.",
    },
    {
        icon: <LayoutGrid className="size-6 text-blue-500" />,
        title: "Batch Processing",
        description: "Remove backgrounds from multiple images at once to save time and effort.",
    },
    {
        icon: <CheckCircle className="size-6 text-blue-500" />,
        title: "Transparent Background",
        description: "Download your images with transparent backgrounds for ultimate flexibility.",
    },
    {
        icon: <Download className="size-6 text-blue-500" />,
        title: "Multiple Formats",
        description: "Download your processed images in PNG, JPG, or WEBP formats.",
    },
];

export const steps = [
    {
        number: "01",
        title: "Upload your image",
        description: "Drag and drop or select an image from your computer. Supports JPG, PNG, and WEBP.",
        image: "/image-1.jpeg",
    },
    {
        number: "02",
        title: "Automatic processing",
        description: "Our AI instantly detects and removes the background with precision.",
        image: "/image-2.png",
    },
    {
        number: "03",
        title: "Download result",
        description: "Download your image with a transparent background in your preferred format.",
        image: "/image-3.png",
    },
];

export const plans = [
    {
        name: "Free",
        price: "0",
        features: [
            "5 images per month",
            "Standard quality",
            "Watermarked output",
            "JPG download only",
            "Basic support",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        price: "12",
        features: [
            "100 images per month",
            "HD quality output",
            "No watermarks",
            "All file formats",
            "Priority support",
            "Batch processing",
        ],
        cta: "Go Pro",
        popular: true,
    },
    {
        name: "Business",
        price: "39",
        features: [
            "Unlimited images",
            "4K quality output",
            "No watermarks",
            "All file formats",
            "Dedicated support",
            "Batch processing",
            "API access",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];