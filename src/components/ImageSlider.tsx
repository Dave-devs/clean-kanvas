import { useState, useRef } from 'react';

interface ImageSliderProps {
    originalImage: string;
    processedImage: string;
    className?: string;
}

const ImageSlider = ({ originalImage, processedImage, className = '' }: ImageSliderProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();

        let clientX;
        if ('touches' in event) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = event.clientX;
        }

        const position = ((clientX - rect.left) / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    return (
        <div
            ref={containerRef}
            className={`relative select-none ${className}`}
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            {/* Original Image */}
            <div className="absolute inset-0">
                <img
                    src={originalImage}
                    alt="Original"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            {/* Processed Image */}
            <div
                className="absolute inset-0 overflow-hidden rounded-2xl"
                style={{ width: `${sliderPosition}%` }}
            >
                <img
                    src={processedImage}
                    alt="Processed"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-4 h-4 border-t-2 border-l-2 border-r-2 border-gray-400 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;