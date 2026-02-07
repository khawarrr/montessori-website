import React from "react";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Top Section - Image and Multi-Culture */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Left Column - Image */}
        <div className="rounded-3xl overflow-hidden">
          <img
            src="/div.jpg"
            alt="Children learning in Montessori classroom"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Multi-Culture Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              MULTI-CULTURE
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Multicultural education is an integral part of the Montessori
              philosophy. Our curriculum respects the individuality of each
              child, creates a community of cooperation and nurtures a sense of
              wonder and curiosity about our differences. We honor and actively
              explore the varied backgrounds and cultures in the world. Students
              are encouraged to appreciate different perspectives, identify and
              reject stereotypes and prejudices, and work for equality and
              justice within the school and the world.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              RACE - GENDER - RELIGEON - FAMILY
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              La Habra Montessori Preschool enjoys a diverse community of
              students, families, and staff, and supports differences of gender,
              race, religion, family structure, socio-economic level, age,
              sexual orientation, and learning style. We strive to maintain a
              collaborative environment rooted from the sharing of experiences,
              ideas and unique qualities that each of our members brings to the
              school. Our goal is that through these efforts, each member of our
              community will feel valued and understood
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sections - Two Columns */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Left Column */}
        <div className="space-y-12">
          {/* About Us Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">ABOUT US</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Since 2014, La Habra Montessori Preschool has had its very own
              Infant Care Center, and we have extended our services to provide a
              Montessori Kindergarten experience to our children. Our students
              receive a well-rounded academic education in accordance with the
              philosophy of Dr. Maria Montessori. They not only develop their
              academic skills, but also their aesthetic and artistic abilities,
              allowing them to grow into well-rounded individuals and global
              citizens.
            </p>
          </div>

          {/* Infant Care Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              INFANT CARE
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              La Habra Montessori Preschool opened its very own Infant Care
              Center in 2014. In the infant class, infants as young as 12 months
              will be introduced to basic Montessori activities such as
              sensorial, practical life, numbers, letter, shapes and colors.
              Infants will do singing, dancing, story time, arts and crafts.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          {/* Qualified Staff Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              QUALIFIED STAFF
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our well trained and qualified staff endeavors to provides a
              loving, safe, nurturing, and great educational experience to our
              children. Our strength is our loving staff. Each one of them
              brings a wealth of knowledge to our organization. We are a diverse
              cultural and religious institute that provides our children to
              accept and respect all cultures and religions.
            </p>
          </div>

          {/* Diversity Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">DIVERSITY</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              We believe that full Montessori educational excellence requires a
              diverse community. We strive to create an environment that fosters
              peace, embraces diversity and encourages a diverse population. Our
              goal is to promote inclusion and collaboration, supporting an
              environment of openness where the exchange of ideas is appreciated
              and encouraged.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Information Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
