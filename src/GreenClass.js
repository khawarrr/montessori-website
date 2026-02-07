import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer";

const GreenClass = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/green-class/green1.jpg",
    "/green-class/green2.jpg",
    "/green-class/green3.jpg",
    "/green-class/green4.jpg",
    "/green-class/green5.jpg",
    "/green-class/green6.jpg",
    "/green-class/green7.jpg",
    "/green-class/green8.jpg",
    "/green-class/green9.jpg",
    "/green-class/green10.jpg",
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">GREEN CLASS</h2>
        <h3 className="text-xl font-semibold text-gray-600 mb-6">
          PRESCHOOL AGE
        </h3>
      </div>

      <div className="max-w-5xl mx-auto mb-8">
        <p className="text-gray-700 leading-relaxed text-justify">
          This age group ideally requires a 5 day repetitive work schedule to
          best help them prepare for Elementary School. Children in this age
          group that attend school 5 days a week have shown faster growth in all
          areas of classroom work as well as significantly better social skills
          essential for success in work and life. Children thrive on routine and
          consistency.
          <br></br>
          <br></br>
          Children love exploring, discovering, experiencing their environment.
          Doing this takes time. We live in such a fast paced world that we want
          results and mastery immediately in a certain time frame. Children do
          not function like that. They need time to develop, time spent to
          unfold and become who they are meant to be. The Montessori environment
          offers quality, purposeful environment for children to engage in. Each
          day they are presented lessons that are age appropriate. We see
          children spend pockets of time in certain areas, repeating works and
          activities that they are enjoying.
          <br></br>
          <br></br>
          Being in the classroom for five days, provides consistency and an
          opportunity to choose many interesting work. It allows the natural
          pace of a child’s learning to happen. Longer times spent in a
          Montessori environment helps develop a strong focus, better attention
          skills as well as longer work cycles. This development is critical to
          a child’s success as they continue on with their schooling. This class
          will provide a solid foundation for the children to grow, learn and
          aspire while making learning fun.
          <br></br>
          <br></br>
          We follow Dr. Maria Montessori’s philosophy of working according to
          the child’s pace. In the Green Class children work according to their
          maturity and skill level. Advanced preschoolers and Kindergarten
          children work at their own pace in small groups. Each child is
          challenged to aspire and grow to his/her highest potential.
          <br></br>
          <br></br>
          We have also have a Kindergarten program for qualified students. This
          program combines the best of Montessori teaching methods and the
          public school curriculum. Montessori teaching methods were developed
          to take your child up to to ages 12-14 (Middle School Level) with
          advanced methodologies that your child can benefit from.
        </p>
      </div>

      <div className="mb-8">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-2xl mb-6">
          <img
            src={images[currentImage]}
            alt={`Green Class ${currentImage + 1}`}
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
                  ? "ring-4 ring-green-500 scale-105"
                  : "hover:ring-2 hover:ring-green-300"
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

export default GreenClass;
