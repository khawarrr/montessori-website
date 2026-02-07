import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of 18 gallery images - you'll need to add these to your public folder
  const images = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
    "/gallery/gallery9.jpg",
    "/gallery/gallery10.jpg",
    "/gallery/gallery11.jpg",
    "/gallery/gallery12.jpg",
    "/gallery/gallery13.jpg",
    "/gallery/gallery14.jpg",
    "/gallery/gallery15.jpg",
    "/gallery/gallery16.jpg",
    "/gallery/gallery17.jpg",
    "/gallery/gallery18.jpg",
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
        <h2 className="text-3xl font-bold text-gray-800 mb-6">PHOTO GALLERY</h2>
      </div>

      {/* Image Carousel */}
      <div className="mb-8">
        {/* Main Image Display */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-2xl mb-6">
          <img
            src={images[currentImage]}
            alt={`Gallery ${currentImage + 1}`}
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

export default Gallery;
