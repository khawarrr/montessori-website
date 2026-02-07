import React from "react";
import { Star, ExternalLink } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      date: "3 months ago",
      text: "La Habra Montessori has been incredible for our daughter! The teachers are so caring and patient. She's learned so much and genuinely loves going to school every day. The Montessori approach has really helped her develop independence and confidence.",
    },
    {
      name: "Jennifer L.",
      rating: 5,
      date: "5 months ago",
      text: "We couldn't be happier with La Habra Montessori! The staff is wonderful, the facilities are clean and safe, and our son has flourished here. He's learned to read, write, and do basic math at such a young age. Highly recommend!",
    },
    {
      name: "Michael R.",
      rating: 5,
      date: "2 months ago",
      text: "Outstanding preschool! The curriculum is well-structured and the teachers genuinely care about each child's development. Our twins have been attending for over a year and we've seen amazing progress in their social skills and academic abilities.",
    },
    {
      name: "Amanda K.",
      rating: 5,
      date: "4 months ago",
      text: "Best decision we made for our child's early education! The Montessori method works wonders, and the staff at La Habra is top-notch. They communicate well with parents and create a nurturing, educational environment. Five stars!",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Parents Say About Us
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-700">5.0</span>
          </div>
          <p className="text-gray-600 text-lg">Based on Google Reviews</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=la+habra+montessori+preschool&sca_esv=f5dfd2a34bf4e47a&hl=en&sxsrf=ANbL-n751D3P_0Dj5P8bv-a0MG1Nb0SJjA%3A1770490416795&source=hp&ei=MIqHaZzULpvGkPIPlu--uQQ&iflsig=AFdpzrgAAAAAaYeYQMrMm4fQCYPLD4z_yK4loX39ITps&gs_ssp=eJzj4tVP1zc0TDZNjy9Ltiw0YLRSNaiwMEhJMUpMTrG0tDAwMUlNsQIKpSUaGRiamRmYmBmbmacYesnmJCpkJCYVJSrk5ueVpBYX5xdlKhQUpRYnZ-Tn5wAAFocaUA&oq=la+habra+monte&gs_lp=Egdnd3Mtd2l6Ig5sYSBoYWJyYSBtb250ZSoCCAAyCxAuGIAEGMcBGK8BMgIQJjICECYyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkj5MlC8CliDHnABeACQAQCYAX-gAY8KqgEEMTEuM7gBA8gBAPgBAZgCD6AC3QqoAgrCAg0QIxjwBRgnGMkCGOoCwgITECMY8AUYgAQYJxjJAhiKBRjqAsICDRAjGIAEGCcYigUY6gLCAgcQIxgnGOoCwgIQECMY8AUYgAQYJxjJAhiKBcICChAjGPAFGCcYyQLCAgQQIxgnwgILEC4YgAQYkQIYigXCAgsQLhiABBixAxiDAcICDhAuGIAEGLEDGNEDGMcBwgIOEAAYgAQYsQMYgwEYigXCAggQABiABBixA8ICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICFhAuGIAEGLEDGNEDGEMYxwEYyQMYigXCAhQQLhiABBixAxiDARjHARiOBRivAcICCBAuGIAEGLEDwgIUEC4YgAQYkQIYxwEYigUYjgUYrwHCAhAQLhiABBhDGMcBGIoFGK8BwgIOEC4YgAQYxwEYjgUYrwHCAhAQLhiABBixAxhDGIMBGIoFwgINEAAYgAQYsQMYQxiKBcICBRAAGIAEwgIFEC4YgASYAwrxBUppRScgwpRDkgcEMTEuNKAH7ZECsgcEMTAuNLgH0wrCBwUwLjcuOMgHNoAIAA&sclient=gws-wiz#lrd=0x80dd2acd998044ed:0x8fa20166046367d1,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <span>Read All Reviews on Google</span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-gray-600 mt-4">
            See what more parents are saying about us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
