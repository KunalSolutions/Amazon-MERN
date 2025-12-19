import React, { useState, useEffect } from "react";

const images = [
  "/Images/Slide/01.jpg",
  "/Images/Slide/02.jpg",
  "/Images/Slide/03.jpg",
  "/Images/Slide/04.jpg",
  "/Images/Slide/05.jpg",
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] relative mt-0">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default HeroSection;
