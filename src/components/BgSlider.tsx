"use client";

import React, { useState } from "react";
import Image from "next/image";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(parseInt(event.target.value));
  };

  return (
    <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
      {/* Background Image */}
      <Image
        className=""
        src={"/image-1.jpeg"}
        alt={""}
        width={100}
        height={100}
        style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
      />
      {/* Foreground Image */}
      <Image
        className="absolute top-0 left-0 w-full h-full"
        src={"/image-3.png"}
        alt={""}
        width={100}
        height={100}
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      />
      {/* Slider */}
      <input
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10"
        type="range"
        min={0}
        max={100}
        value={sliderPosition}
        onChange={handleSliderChnage}
      />
    </div>
  );
};

export default BgSlider;
