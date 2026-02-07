import React from "react";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl p-12 text-white shadow-2xl">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">TAKE A TOUR</h3>
          <p className="mb-8 leading-relaxed">
            Make an appointment and we will give you a comprehensive guided
            tour. Give your child a gift of an education and incredible social
            skills development.
          </p>

          <h3 className="text-2xl font-bold mb-4">HOURS OF OPERATION</h3>
          <p className="mb-2">6:30 a.m. - 6:00 p.m.</p>
          <p className="mb-8">
            Extra Cost Extended Hours available until 8:00 p.m.
          </p>

          <h3 className="text-2xl font-bold mb-4">GET IN TOUCH</h3>
          <p className="mb-2">230 S. Idaho Street, La Habra, CA 90631</p>
          <p className="mb-2">Main line : (562) 691-6450</p>
          <p className="mb-6">Enrollment Inquiries : (626) 224-5259</p>

          <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition-all">
            CLICK TO SEND E-MAIL
          </button>
        </div>

        <div>
          <div className="bg-white rounded-2xl p-8 text-center mb-8">
            <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">MAP</h3>
            <p className="text-gray-600 mb-4">
              CLICK HERE FOR MAP & DIRECTIONS
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all cursor-pointer">
              <span className="text-white font-bold">t</span>
            </div>
            <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all cursor-pointer">
              <span className="text-white font-bold">i</span>
            </div>
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">
              <span className="text-white font-bold">▶</span>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all cursor-pointer">
              <span className="text-white font-bold">f</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
