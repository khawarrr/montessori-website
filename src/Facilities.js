import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer";

const Facilities = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of 10 facility images - you'll need to add these to your public folder
  const images = [
    "/facilities/facility1.jpg",
    "/facilities/facility2.jpg",
    "/facilities/facility3.jpg",
    "/facilities/facility4.jpg",
    "/facilities/facility5.jpg",
    "/facilities/facility6.jpg",
    "/facilities/facility7.jpg",
    "/facilities/facility8.jpg",
    "/facilities/facility9.jpg",
    "/facilities/facility10.jpg",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">FACILITIES</h2>
        <p className="text-gray-700 leading-relaxed text-justify max-w-5xl mx-auto mb-8">
          Take a quick look at our clean and safe facilities. Because our school
          caters to a wide range of children from infants to school age
          children, we have a comprehensive set of equipment, teaching material
          and safety equipment for your child. Maintaining a safe and clean
          school is a very complex job. Your help in making that possible is
          greatly appreciated. If you have suggestions on how we can improve our
          school please feel free to give us some feedback. Some parents have
          even contributed their time and money to improve our school which we
          greatly appreciated. We call that paying it forward. Take a little,
          leave a little behind for the next generation.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="mb-8">
        {/* Main Image Display */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-2xl mb-6">
          <img
            src={images[currentImage]}
            alt={`Facility ${currentImage + 1}`}
            className="w-full h-[700px] object-cover"
          />

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {currentImage + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            MEDIA GALLERY
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative overflow-hidden rounded-lg transition-all ${
                currentImage === index
                  ? "ring-4 ring-blue-500 scale-105"
                  : "hover:ring-2 hover:ring-blue-300"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-24 object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Information Section */}
      <Footer />
    </div>
  );
};

export default Facilities;
