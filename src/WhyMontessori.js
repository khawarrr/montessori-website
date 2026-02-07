import React from "react";
import Footer from "./Footer";

const WhyMontessori = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            WHY MONTESSORI
          </h2>

          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/montessori-materials.jpg"
              alt="Montessori color tablets"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-3 mb-8">
            <img
              src="/thumb1.jpg"
              alt="Montessori material 1"
              className="w-20 h-20 object-cover rounded"
            />
            <img
              src="/thumb2.jpg"
              alt="Montessori material 2"
              className="w-20 h-20 object-cover rounded"
            />
            <img
              src="/thumb3.jpg"
              alt="Montessori material 3"
              className="w-20 h-20 object-cover rounded"
            />
            <img
              src="/thumb4.jpg"
              alt="Montessori material 4"
              className="w-20 h-20 object-cover rounded"
            />
            <img
              src="/thumb5.jpg"
              alt="Montessori material 5"
              className="w-20 h-20 object-cover rounded"
            />
          </div>

          {/* Main Description */}
          <p className="text-gray-700 leading-relaxed text-justify mb-8">
            Montessori education is an educational approach developed by Italian
            physician and educator Dr. Maria Montessori and characterized by an
            emphasis on independence, freedom within limits, and respect for a
            child's natural psychological, physical, and social development. It
            succeeds because it draws its principles from the natural
            development of the child.
          </p>

          {/* Flexibility & Prepared Environments */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            FLEXIBILITY & PREPARED ENVIRONMENTS
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-8">
            The inherent flexibility allows the method to adapt to the needs of
            the individual, regardless of the level of ability, learning style
            or social maturity. She believed the needs, talents, gifts, and
            special individuality of each child were important as a guide. Using
            this approach she created "prepared environments" for multi-age
            groups (0,3, 3-6, 6-9, 9-12, and 12- 14). The environment contains
            specifically designed materials for development that invite children
            to engage in learning activities of their own choice. Under the
            guidance of a trained teacher, children in a Montessori classroom
            learn by making discoveries with the materials, cultivating
            concentration, motivation, self-discipline, and a love of learning.
          </p>

          {/* Hands On Approach */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            HANDS ON APPROACH
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-8">
            Montessori is a hands-on approach to learning that encompasses the
            use of the five senses, kinetic movement, spatial refinement, and
            small and large motor skill coordination. With this concrete
            knowledge, children find their own way to an understanding of
            concepts. This is combined with a deep love and need for purposeful
            work.
          </p>

          {/* Self Reliance */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            SELF RELIANCE
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Montessori method emphasizes self-reliance and independence, in
            the classroom and at home, by teaching children the skills to do as
            much for themselves as they are capable of. The trained teacher
            (guide) is an artful organizer of experiences for the child to
            discover, process and practice. Constant and ongoing observation by
            the guide is one of the foundations of the Montessori program.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            5 MAIN AREAS OF FOCUS
          </h2>

          {/* Practical Life */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              PRACTICAL LIFE
            </h3>
            <div className="mb-4">
              <img
                src="/practical-life.jpg"
                alt="Child doing practical life activities"
                className="w-full rounded-lg shadow-md mb-3"
              />
              <div className="flex gap-2">
                <img
                  src="/practical-thumb1.jpg"
                  alt="Practical life activity"
                  className="w-20 h-20 object-cover rounded"
                />
                <img
                  src="/practical-thumb2.jpg"
                  alt="Practical life activity"
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Some life skills focus on pouring, buttoning, shoe tying and other
              activities that develop coordination and developing motor skills.
            </p>
          </div>

          {/* Sensorial */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">SENSORIAL</h3>
            <div className="mb-4">
              <img
                src="/sensorial.jpg"
                alt="Child working with sensorial materials"
                className="w-full rounded-lg shadow-md mb-3"
              />
              <div className="flex gap-2">
                <img
                  src="/sensorial-thumb1.jpg"
                  alt="Sensorial material"
                  className="w-20 h-20 object-cover rounded"
                />
                <img
                  src="/sensorial-thumb2.jpg"
                  alt="Sensorial material"
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Helping children develop, explore and understand their sense of
              taste, smell, sight, touch, and hearing.
            </p>
          </div>

          {/* Mathematics */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              MATHEMATICS
            </h3>
            <div className="mb-4">
              <img
                src="/mathematics.jpg"
                alt="Child learning mathematics"
                className="w-full rounded-lg shadow-md mb-3"
              />
              <div className="flex gap-2">
                <img
                  src="/math-thumb1.jpg"
                  alt="Math material"
                  className="w-20 h-20 object-cover rounded"
                />
                <img
                  src="/math-thumb2.jpg"
                  alt="Math material"
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Some math skills consist of using concrete forms to learn things,
              including beads and boards.
            </p>
          </div>

          {/* Language */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">LANGUAGE</h3>
            <div className="mb-4">
              <img
                src="/language.jpg"
                alt="Child learning language skills"
                className="w-full rounded-lg shadow-md mb-3"
              />
              <div className="flex gap-2">
                <img
                  src="/language-thumb1.jpg"
                  alt="Language material"
                  className="w-20 h-20 object-cover rounded"
                />
                <img
                  src="/language-thumb2.jpg"
                  alt="Language material"
                  className="w-20 h-20 object-cover rounded"
                />
                <img
                  src="/language-thumb3.jpg"
                  alt="Language material"
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Helping children basic writing and reading like rhyming and
              letters, developing hand strength, and paper letter tracing.
            </p>
          </div>

          {/* Geography */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">GEOGRAPHY</h3>
            <div className="mb-4">
              <img
                src="/geography.jpg"
                alt="Children learning geography"
                className="w-full rounded-lg shadow-md"
              />
              <div className="flex gap-2">
                <img
                  src="/geography-thumb1.jpg"
                  alt="Language material"
                  className="w-20 h-20 object-cover rounded"
                />
                <img
                  src="/geography-thumb2.jpg"
                  alt="Language material"
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Exposing the child to basics in geography, racial groups, history,
              and life sciences. Music, art, and movement education are part of
              the integrated cultural curriculum"
            </p>
          </div>

          {/* Science */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">SCIENCE</h3>
            <div className="mb-4">
              <img
                src="/science.jpg"
                alt="Children doing science activities"
                className="w-full rounded-lg shadow-md mb-3"
              />
              <div className="flex gap-2">
                <img
                  src="/science-thumb1.jpg"
                  alt="Science activity"
                  className="w-20 h-20 object-cover rounded"
                />
                <img
                  src="/science-thumb2.jpg"
                  alt="Science activity"
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Information Section */}
      <Footer />
    </div>
  );
};

export default WhyMontessori;
