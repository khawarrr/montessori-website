import React from "react";
import Footer from "./Footer";

const MontessoriVideo = () => {
  const videos = [
    "OM1Gu9KXVkk",
    "-aozljXXGY8",
    "NlnHVxJKEiM",
    "wKSRCeyR5Ck",
    "DshFPTdCJc0",
    "iXdsL15l1Gs",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          MONTESSORI VIDEOS
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Here is a collection of videos about Montessori. Take a few moments to
          watch them and get an understanding about Montessori. It is quite
          interesting.
        </p>
      </div>

      {/* Videos Grid */}
      <div className="space-y-8 mb-16">
        {videos.map((videoId, index) => (
          <div key={index} className="w-full">
            <div
              className="relative"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Montessori Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Information Section */}
      <Footer />
    </div>
  );
};

export default MontessoriVideo;
