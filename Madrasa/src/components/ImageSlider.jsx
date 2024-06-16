import { useEffect, useState } from "react";

const images = [
  "https://via.placeholder.com/800x400",
  "https://via.placeholder.com/800x600",
  "https://via.placeholder.com/700x500",
  // Add paths to your images
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[45vh] overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
