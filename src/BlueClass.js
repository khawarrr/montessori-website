import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer";

const BlueClass = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/blue-class/blue1.jpg",
    "/blue-class/blue2.jpg",
    "/blue-class/blue3.jpg",
    "/blue-class/blue4.jpg",
    "/blue-class/blue5.jpg",
    "/blue-class/blue6.jpg",
    "/blue-class/blue7.jpg",
    "/blue-class/blue8.jpg",
    "/blue-class/blue9.jpg",
    "/blue-class/blue10.jpg",
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">BLUE CLASS</h2>
        <h3 className="text-xl font-semibold text-gray-600 mb-6">
          PRESCHOOL AGE
        </h3>
      </div>

      <div className="max-w-5xl mx-auto mb-8">
        <ul className="list-disc space-y-4 text-gray-700 leading-relaxed">
          <li>
            This is a very important class. As infants progress into this class,
            they learn and work in a more structured environment. A child may
            stay in this class until he or she is fully potty trained and able
            to work on his own and follow directions.
          </li>
          <li>
            This classroom is slower paced and provides a child-centered
            learning experience. The child has the ability to make his or her
            own choices and the teacher as the director gently guides the child
            to activities as per the lesson plan.
          </li>
          <li>The teacher-child ratio is lower.</li>
          <li>
            This program offers very young children self-development in a tender
            atmosphere of special understanding, respect, and support.
          </li>
          <li>
            Montessori Sensorial Activities respond to the child's urge to use
            all his senses, to explore around him.
          </li>
          <li>
            This program also appropriately accommodates the very young child's
            sensitive period for language by offering creative and intriguing
            concepts to expand their growing vocabularies. By joining
            conversations, listening to stories, classifying objects, and
            learning songs and poems, all nurture their budding language skills.
          </li>
          <li>
            Many Practical Life Exercises in this program will assist the
            self-help skills that lead to independence.
          </li>
          <li>
            This is the age of very strong imitation and the teachers constantly
            model appropriate social skills, good manners, and consideration of
            others.
          </li>
          <li>
            Children will use simple Montessori material to learn math,
            language, geography, science, and social science at their own pace.
          </li>
          <li>
            Arts and crafts, music and movement, and dance classes help to
            improve aesthetic values.
          </li>
          <li>
            Educational and fun field trips will be included in the program as
            part of their hands-on learning.
          </li>
          <li>
            This program gives a solid basic foundation for a very young child
            towards academic success later in life.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-2xl mb-6">
          <img
            src={images[currentImage]}
            alt={`Blue Class ${currentImage + 1}`}
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

      <Footer />
    </div>
  );
};

export default BlueClass;
