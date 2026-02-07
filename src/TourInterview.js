import React from "react";
import Footer from "./Footer";

const TourInterview = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            TOUR AND INTERVIEW
          </h2>

          {/* Image */}
          <div className="mb-6">
            <img
              src="/tour-classroom.jpg"
              alt="School classroom"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Description Text */}
          <p className="text-gray-700 leading-relaxed text-justify mb-6">
            Prior to admission we ask you to make an appointment so we can
            devote time and attention to you. As you can well understand we tend
            to get busy with the children. If you pop in without an appointment
            we will not be able to devote our full attention to you.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-6">
            During the tour we both get to know each other. This helps us to see
            if our school is a good fit for your child. We will show and
            demonstrate what we do at the school to you get a better
            understanding of what we can offer your child. A carefully managed
            tour will put your child at ease and make the tour enjoyable for
            everyone.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-6">
            Prior to visiting the school please fill out the " Admission Form "
            listed below.
          </p>

          {/* Admission Tour Form Button */}
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded transition-all text-lg">
            ADMISSION TOUR FORM
          </button>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            WHAT TO EXPECT DURING THE TOUR
          </h2>

          {/* Length of Tour */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              LENGTH OF TOUR
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Most tours last between 20-45 minutes. We want to show you every
              aspect of the school and how it works.
            </p>
          </div>

          {/* What You Will See */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              WHAT YOU WILL SEE
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              You will be given an overall tour of the school facilities and
              introduced to the teachers. That means we will show you all the
              classrooms, the washroom, the playground and finally sit down in
              our office for a question and answer session.
            </p>
          </div>

          {/* Classroom Tour */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              CLASSROOM TOUR
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              You will get to see, touch and feel classroom material and
              interact with specific class for your child
            </p>
          </div>

          {/* Prepare Your Child */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              PREPARE YOUR CHILD
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              To make your child comfortable during the tour ensure that your
              child is well fed and dressed before the tour.
            </p>
          </div>

          {/* Admission Forms */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              ADMISSION FORMS
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              During the tour you will be given a brief overview of the
              documentation you need to enroll in school. All admissions are on
              our website. All you have to do is download it and fill it out and
              bring it to the school where you are approved for admission. The
              Physicians form requires the Child's Doctor to sign and put his
              official stamp on the form. Do not forget this.
            </p>
          </div>

          {/* Questions */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">QUESTIONS</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              You will have many questions. Bring a notepad to write down any
              information you need to clarify.
            </p>
          </div>

          {/* Arrive on Time */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              ARRIVE ON TIME
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Please arrive on time. We have allocated the time for you. Any
              delays may lead to cancellation of the tour since we often have
              another tour that cannot be delayed.
            </p>
          </div>

          {/* Security */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">SECURITY</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Tours are conducted with either one or both parents but not
              extended family members, friends or relatives.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Information Section */}
      <Footer />
    </div>
  );
};

export default TourInterview;
