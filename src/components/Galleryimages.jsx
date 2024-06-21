import React, { useState } from "react";
import Roughimages from "./Roughimages";

const GalleryImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // Initialize to show 3 thumbnails

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Roughimages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Roughimages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleViewMore = () => {
    setVisibleCount((prevCount) =>
      prevCount + 3 > Roughimages.length ? Roughimages.length : prevCount + 3
    );
  };

  return (
    <div style={imageContainer}>
      <div style={sliderWrapper}>
        <button style={buttonStyle1} onClick={previousSlide}>
          {"<"}
        </button>
        <div style={sliderStyle}>
          <div
            style={{
              ...sliderInnerStyle,
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Roughimages.map((image, index) => (
              <img
                key={index}
                src={image.imgUrl}
                alt={`Slide ${image.id}`}
                style={imageStyle}
              />
            ))}
          </div>
        </div>
        <button style={buttonStyle2} onClick={nextSlide}>
          {">"}
        </button>
      </div>
      <div style={galleryStyle}>
        {Roughimages.slice(0, visibleCount).map((image) => (
          <div key={image.id} style={thumbnailContainerStyle}>
            <img
              src={image.imgUrl}
              alt={`Thumbnail ${image.id}`}
              style={thumbnailStyle}
              onClick={() => setCurrentIndex(image.id - 1)}
            />
          </div>
        ))}
      </div>
      {visibleCount < Roughimages.length && (
        <button style={viewMoreButtonStyle} onClick={handleViewMore}>
          View More
        </button>
      )}
    </div>
  );
};

const imageContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "#E5E7EB",
};

const sliderWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  position: "relative",
  width: "100%",
  overflow: "hidden", // Hide overflowing images
};

const sliderStyle = {
  display: "flex",
  width: "80%", // Slider container width
  overflow: "hidden", // Hide the overflow content
};

const sliderInnerStyle = {
  display: "flex",
  transition: "transform 0.5s ease-in-out", // Smooth slide effect
};

const imageStyle = {
  minWidth: "100%", // Ensure each image takes the full width of the slider container
  height: "600px",
  objectFit: "cover",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const buttonStyle1 = {
  position: "absolute",
  top: "50%",
  left: "3%",
  color: "white",
  height: "6%",
  width: "2%",
  transform: "translateY(-50%)",
  backgroundColor: "#1F2937",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  padding: "10px",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const buttonStyle2 = {
  position: "absolute",
  height: "6%",
  width: "2%",
  top: "50%",
  right: "3%",
  color: "white",
  transform: "translateY(-50%)",
  backgroundColor: "#1F2937",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  padding: "10px",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const galleryStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%", // Main gallery container width
  margin: "0 auto", // Center the gallery horizontally
};

const thumbnailContainerStyle = {
  width: "26%", // Each thumbnail takes up roughly 26% of the gallery container width
  height: "auto", // Adjusts height to maintain aspect ratio
  margin: "10px", // Margin around each thumbnail
  boxSizing: "border-box", // Include padding and border in the element's total width and height
  boxShadow: "5px 12px 10px rgba(31, 41, 95, 0.6)", // Shadow with the specified color
  borderRadius: "8px", // Adding border-radius for rounded corners
};

const thumbnailStyle = {
  width: "100%", // Ensure the image takes up the entire space of its container
  height: "100%", // Make the height equal to the width for square images
  objectFit: "cover", // Ensure the image covers the entire container while maintaining aspect ratio
  borderRadius: "8px", // Rounded corners for aesthetic purposes
  cursor: "pointer", // Pointer cursor on hover
};

const viewMoreButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#1F2937", // Blue color
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default GalleryImages;
