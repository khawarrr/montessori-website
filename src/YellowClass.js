import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer";

const YellowClass = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/yellow-class/yellow1.jpg",
    "/yellow-class/yellow2.jpg",
    "/yellow-class/yellow3.jpg",
    "/yellow-class/yellow4.jpg",
    "/yellow-class/yellow5.jpg",
    "/yellow-class/yellow6.jpg",
    "/yellow-class/yellow7.jpg",
    "/yellow-class/yellow8.jpg",
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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">YELLOW CLASS</h2>
        <h3 className="text-xl font-semibold text-gray-600 mb-6">
          BEFORE AND AFTER SCHOOL CARE
        </h3>
      </div>

      <div className="max-w-5xl mx-auto mb-8">
        <p className="text-gray-700 leading-relaxed text-justify">
          If you want the best Before and After School Care for children between
          the Ages of 6-13 we do it all. With free Pick Up, homework
          supervision, breakafast and snacks and arts and crafts. Many
          activities to keep school-aged kids busy year around. Fun and
          educational field trips in summer, participate in all our special
          events and parties. That is why not only do we provide transportation
          to and from school but we provide a well supervised fun learning
          enviromenent.
        </p>
      </div>

      <div className="mb-8">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-2xl mb-6">
          <img
            src={images[currentImage]}
            alt={`Yellow Class ${currentImage + 1}`}
            className="w-full h-[700px] object-cover"
          />

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {currentImage + 1} / {images.length}
          </div>
        </div>

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
                  ? "ring-4 ring-yellow-500 scale-105"
                  : "hover:ring-2 hover:ring-yellow-300"
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

      <Footer />
    </div>
  );
};

export default YellowClass;
