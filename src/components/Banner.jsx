import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[30vh] flex items-center justify-center text-white"
      style={{
        background: "linear-gradient(135deg, #4c669f, #3b5998, #192f6a)", // Gradient background
      }}
    >
      <div className="text-center p-4 bg-black bg-opacity-50 rounded-md">
        <h1 className="text-4xl font-bold mb-2">
          "إِنَّ هَـٰذَا ٱلۡقُرۡءَانَ يَهۡدِي لِلَّتِي هِيَ أَقۡوَمُ"
        </h1>
        <p className="text-xl">
          "Indeed, this Qur'an guides to that which is most suitable." (Quran
          17:9)
        </p>
      </div>
    </div>
  );
};

export default Banner;
