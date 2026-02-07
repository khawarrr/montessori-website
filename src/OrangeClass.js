import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer";

const OrangeClass = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of 10 orange class images - you'll need to add these to your public folder
  const images = [
    "/orange-class/orange1.jpg",
    "/orange-class/orange2.jpg",
    "/orange-class/orange3.jpg",
    "/orange-class/orange4.jpg",
    "/orange-class/orange5.jpg",
    "/orange-class/orange6.jpg",
    "/orange-class/orange7.jpg",
    "/orange-class/orange8.jpg",
    "/orange-class/orange9.jpg",
    "/orange-class/orange10.jpg",
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">ORANGE CLASS</h2>
        <h3 className="text-xl font-semibold text-gray-600 mb-6">
          INFANT AND TODDLER
        </h3>
      </div>

      {/* Description Paragraphs */}
      <div className="max-w-5xl mx-auto mb-8 space-y-4">
        <p className="text-gray-700 leading-relaxed text-justify">
          Currently we are enrolling infants 3 months to 24 months. We use
          infant-toddler Montessori materials to stimulate the young minds. Our
          dedicated loving and caring staff work diligently to provide for the
          different needs of each infant/toddler.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify">
          Each child has an individualized plan and will receive a detailed
          daily written reports about his/her activities during the day. We have
          a lesson plan, weekly themes, and a daily schedule for the class.
          Daily needs for the infants will differ and we do our best to take
          care of their needs. Teachers will do arts and crafts, singing, story
          time, and outdoor/indoor play with the kids to keep them busy
          throughout the day.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="mb-8">
        {/* Main Image Display */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-2xl mb-6">
          <img
            src={images[currentImage]}
            alt={`Orange Class ${currentImage + 1}`}
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
                  ? "ring-4 ring-orange-500 scale-105"
                  : "hover:ring-2 hover:ring-orange-300"
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

export default OrangeClass;
