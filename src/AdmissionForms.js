import React from "react";
import { FileText } from "lucide-react";
import Footer from "./Footer";

const AdmissionForms = () => {
  const requiredForms = [
    {
      number: 1,
      name: "Admission Agreement",
      url: "https://www.lahabramontessori.com/LIC/Admission_Agreement_2021.pdf",
    },
    {
      number: 2,
      name: "Registration Form",
      url: "https://lahabramontessori.com/LIC/registration_form_lahambra_dec_2016.pdf",
    },
    {
      number: 3,
      name: "Identification of Emergency Information (LIC700)",
      url: "https://lahabramontessori.com/LIC/LIC700.pdf",
    },
    {
      number: 4,
      name: "Notification of Parents Rights (LIC995)",
      url: "https://lahabramontessori.com/LIC/LIC995.pdf",
    },
    {
      number: 5,
      name: "Personal Rights (LIC 613A)",
      url: "https://lahabramontessori.com/LIC/LIC613A.pdf",
    },
    {
      number: 6,
      name: "Consent for Emergency Medical Treatment (LIC627)",
      url: "https://lahabramontessori.com/LIC/LIC627.pdf",
    },
    {
      number: 7,
      name: "Physicians Report (LIC 701)",
      url: "https://lahabramontessori.com/LIC/LIC701.pdf",
    },
    {
      number: 8,
      name: "Child's Pre-Admission Health History Parents Report (LIC 702)",
      url: "https://lahabramontessori.com/LIC/LIC702.pdf",
    },
  ];

  const optionalForms = [
    {
      name: "Nebulizer Care Consent",
      url: "https://www.lahabramontessori.com/PDF/Nebulizer%20Care%20Consent.PDF",
    },
    {
      name: "Meal Benefit Form",
      url: "https://www.lahabramontessori.com/PDF/Meal%20Benifit%20Form%20to%20Parents.pdf",
    },
    {
      name: "Infant Center Food and Sleeping Schedule",
      url: "https://www.lahabramontessori.com/PDF/Infant%20Center%20Food%20and%20Sleeping%20Schedule.pdf",
    },
    {
      name: "LHMP Transportation",
      url: "https://www.lahabramontessori.com/PDF/LHMP%20Transportation%20Form.pdf",
    },
  ];

  const otherForms = [
    {
      name: "Lunch Menu (Sample)",
      url: "https://www.lahabramontessori.com/PDF/MENU1.pdf",
    },
    {
      name: "Summer Camp Program (2022)",
      url: "https://www.lahabramontessori.com/PDF/LHMP%20Summer%20Camp%202022.pdf",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ADMISSION FORMS
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          These PDF forms can be electronically filled. Please fill them and
          bring to the school. We suggest you save them, fill it out, save them
          again, then print them and bring it to us. That way you have a copy
          too. Any information that changes in the future can also be updated by
          you and sent to us.
        </p>
      </div>

      {/* Forms Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
        {/* Required Forms */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-cyan-400">
                <th
                  className="px-6 py-4 text-left text-white font-bold"
                  colSpan="2"
                >
                  Required Forms
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {requiredForms.map((form) => (
                <tr
                  key={form.number}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-800 font-semibold w-16">
                    {form.number}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      {form.name}
                    </a>
                  </td>
                </tr>
              ))}

              {/* Optional Forms Header */}
              <tr className="bg-gray-100">
                <td colSpan="2" className="px-6 py-3 font-bold text-gray-800">
                  OPTIONAL FORMS (IF REQUIRED)
                </td>
              </tr>

              {/* Optional Forms */}
              {optionalForms.map((form, index) => (
                <tr
                  key={`optional-${index}`}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">
                    <a
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      {form.name}
                    </a>
                  </td>
                </tr>
              ))}

              {/* Other Forms Header */}
              <tr className="bg-gray-100">
                <td colSpan="2" className="px-6 py-3 font-bold text-gray-800">
                  OTHER
                </td>
              </tr>

              {/* Other Forms */}
              {otherForms.map((form, index) => (
                <tr
                  key={`other-${index}`}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">
                    <a
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      {form.name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Information Section */}
      <Footer />
    </div>
  );
};

export default AdmissionForms;
