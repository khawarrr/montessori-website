import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Heart,
  Users,
  BookOpen,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import AboutUs from "./AboutUs";
import WhyMontessori from "./WhyMontessori";
import MontessoriVideo from "./MontessoriVideo";
import Facilities from "./Facilities";
import TourInterview from "./TourInterview";
import AdmissionForms from "./AdmissionForms";
import OrangeClass from "./OrangeClass";
import BlueClass from "./BlueClass";
import GreenClass from "./GreenClass";
import YellowClass from "./YellowClass";
import Gallery from "./Gallery";
import Reviews from "./Reviews";

const PreschoolWebsite = () => {
  // Get initial section from URL hash, default to "home"
  const getInitialSection = () => {
    const hash = window.location.hash.slice(1); // Remove the '#'
    return hash ? decodeURIComponent(hash) : "home";
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(getInitialSection());
  const [showFeeCalculator, setShowFeeCalculator] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    children: [{ age: "" }],
  });
  const [calculatedFees, setCalculatedFees] = useState(null);

  // Custom navigation function that updates both state and URL hash
  const navigateToSection = (section) => {
    setActiveSection(section);
    window.location.hash = section;
  };

  // Listen for hash changes (browser back/forward buttons)
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveSection(decodeURIComponent(hash));
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addChild = () => {
    setFormData({
      ...formData,
      children: [...formData.children, { age: "" }],
    });
  };

  const removeChild = (index) => {
    const newChildren = formData.children.filter((_, i) => i !== index);
    setFormData({ ...formData, children: newChildren });
  };

  const handleChildAgeChange = (index, age) => {
    const newChildren = [...formData.children];
    newChildren[index] = { age };
    setFormData({ ...formData, children: newChildren });
  };

  const calculateFees = (e) => {
    e.preventDefault();

    const fees = {
      registration: 150,
      materials: formData.children.map((child) => {
        const age = parseInt(child.age);
        if (age >= 18 && age <= 36) return 100; // 18 months - 3 years
        if (age >= 48 && age <= 60) return 150; // 4-5 years
        return 0;
      }),
      lateFee: 25,
      returnCheckFee: 35,
    };

    setCalculatedFees(fees);
  };

  const resetForm = () => {
    setFormData({
      parentName: "",
      email: "",
      phone: "",
      children: [{ age: "" }],
    });
    setCalculatedFees(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  La Habra Montessori
                </h1>
                <p className="text-xs text-gray-500">Where Learning Begins</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => navigateToSection("home")}
                className={`px-4 py-2 font-medium transition-all ${
                  activeSection === "home"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                Home
              </button>

              {/* Our School Dropdown */}
              <div className="relative group">
                <button
                  className={`px-4 py-2 font-medium transition-all flex items-center gap-1 ${
                    activeSection.includes("school") ||
                    activeSection.includes("about") ||
                    activeSection.includes("montessori") ||
                    activeSection.includes("facilities")
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  Our School
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-0 w-52 bg-cyan-400 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <button
                    onClick={() => navigateToSection("about us")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    ABOUT US
                  </button>
                  <button
                    onClick={() => navigateToSection("why montessori")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    WHY MONTESSORI
                  </button>
                  <button
                    onClick={() => navigateToSection("montessori video")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    MONTESSORI VIDEO
                  </button>
                  <button
                    onClick={() => navigateToSection("facilities")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    FACILITIES
                  </button>
                </div>
              </div>

              {/* Admission Dropdown */}
              <div className="relative group">
                <button
                  className={`px-4 py-2 font-medium transition-all flex items-center gap-1 ${
                    activeSection.includes("admission") ||
                    activeSection.includes("tour") ||
                    activeSection.includes("forms") ||
                    activeSection.includes("summer")
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  Admission
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-0 w-52 bg-cyan-400 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <button
                    onClick={() => navigateToSection("tour & interview")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    TOUR & INTERVIEW
                  </button>
                  <button
                    onClick={() => navigateToSection("admission forms")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    ADMISSION FORMS
                  </button>
                  <button
                    onClick={() => navigateToSection("summer program")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    SUMMER PROGRAM
                  </button>
                </div>
              </div>

              {/* Our Classes Dropdown */}
              <div className="relative group">
                <button
                  className={`px-4 py-2 font-medium transition-all flex items-center gap-1 ${
                    activeSection.includes("classes") ||
                    activeSection.includes("orange") ||
                    activeSection.includes("blue") ||
                    activeSection.includes("green") ||
                    activeSection.includes("yellow")
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  Our Classes
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-0 w-52 bg-cyan-400 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <button
                    onClick={() => navigateToSection("orange (infants)")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    ORANGE (INFANTS)
                  </button>
                  <button
                    onClick={() => navigateToSection("blue class")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    BLUE CLASS
                  </button>
                  <button
                    onClick={() => navigateToSection("green class")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    GREEN CLASS
                  </button>
                  <button
                    onClick={() => navigateToSection("yellow class")}
                    className="block w-full text-left px-5 py-2.5 text-white text-sm font-semibold hover:bg-cyan-500"
                  >
                    YELLOW CLASS
                  </button>
                </div>
              </div>

              <button
                onClick={() => navigateToSection("fees")}
                className={`px-4 py-2 font-medium transition-all ${
                  activeSection === "fees"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                Fees
              </button>

              <button
                onClick={() => navigateToSection("gallery")}
                className={`px-4 py-2 font-medium transition-all ${
                  activeSection === "gallery"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                Gallery
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 bg-white">
              <button
                onClick={() => {
                  navigateToSection("home");
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 capitalize ${
                  activeSection === "home"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700"
                }`}
              >
                Home
              </button>

              <div className="text-gray-700 font-medium px-4 py-2">
                Our School
              </div>
              <button
                onClick={() => {
                  navigateToSection("about us");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  navigateToSection("why montessori");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Why Montessori
              </button>
              <button
                onClick={() => {
                  navigateToSection("montessori video");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Montessori Video
              </button>
              <button
                onClick={() => {
                  navigateToSection("facilities");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Facilities
              </button>

              <div className="text-gray-700 font-medium px-4 py-2">
                Admission
              </div>
              <button
                onClick={() => {
                  navigateToSection("tour & interview");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Tour & Interview
              </button>
              <button
                onClick={() => {
                  navigateToSection("admission forms");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Admission Forms
              </button>
              <button
                onClick={() => {
                  navigateToSection("summer program");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Summer Program
              </button>

              <div className="text-gray-700 font-medium px-4 py-2">
                Our Classes
              </div>
              <button
                onClick={() => {
                  navigateToSection("orange (infants)");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Orange (Infants)
              </button>
              <button
                onClick={() => {
                  navigateToSection("blue class");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Blue Class
              </button>
              <button
                onClick={() => {
                  navigateToSection("green class");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Green Class
              </button>
              <button
                onClick={() => {
                  navigateToSection("yellow class");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Yellow Class
              </button>

              <button
                onClick={() => {
                  navigateToSection("fees");
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 capitalize ${
                  activeSection === "fees"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700"
                }`}
              >
                Fees
              </button>

              <button
                onClick={() => {
                  navigateToSection("gallery");
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 capitalize ${
                  activeSection === "gallery"
                    ? "bg-blue-500 text-white"
                    : "text-gray-700"
                }`}
              >
                Gallery
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <div className="relative overflow-hidden">
          {/* Background Pattern with Kids Illustrations */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400 rounded-full"></div>
            <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-purple-400 rounded-full"></div>

            {/* Child figure 1 - playing */}
            <svg
              className="absolute top-20 right-1/4 w-40 h-40"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="30" r="20" fill="#FCD34D" />
              <circle cx="40" cy="50" r="3" fill="#000" />
              <circle cx="60" cy="50" r="3" fill="#000" />
              <path
                d="M 40 60 Q 50 70 60 60"
                stroke="#000"
                fill="none"
                strokeWidth="2"
              />
              <rect
                x="30"
                y="70"
                width="40"
                height="25"
                fill="#60A5FA"
                rx="5"
              />
            </svg>

            {/* Child figure 2 - learning */}
            <svg
              className="absolute bottom-40 right-10 w-36 h-36"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="30" r="18" fill="#F9A8D4" />
              <circle cx="42" cy="48" r="3" fill="#000" />
              <circle cx="58" cy="48" r="3" fill="#000" />
              <path
                d="M 42 58 Q 50 65 58 58"
                stroke="#000"
                fill="none"
                strokeWidth="2"
              />
              <rect
                x="32"
                y="68"
                width="36"
                height="28"
                fill="#A78BFA"
                rx="5"
              />
            </svg>

            {/* Book */}
            <svg
              className="absolute top-1/4 left-1/4 w-30 h-30"
              viewBox="0 0 60 60"
            >
              <rect
                x="10"
                y="15"
                width="40"
                height="30"
                fill="#60A5FA"
                rx="2"
              />
              <line
                x1="30"
                y1="15"
                x2="30"
                y2="45"
                stroke="#1E40AF"
                strokeWidth="2"
              />
              <line
                x1="20"
                y1="25"
                x2="27"
                y2="25"
                stroke="#fff"
                strokeWidth="1.5"
              />
              <line
                x1="20"
                y1="30"
                x2="27"
                y2="30"
                stroke="#fff"
                strokeWidth="1.5"
              />
            </svg>

            {/* Building blocks */}
            <svg
              className="absolute bottom-1/3 left-10 w-32 h-32"
              viewBox="0 0 80 80"
            >
              <rect
                x="10"
                y="50"
                width="20"
                height="20"
                fill="#F87171"
                rx="2"
              />
              <rect
                x="32"
                y="50"
                width="20"
                height="20"
                fill="#FCD34D"
                rx="2"
              />
              <rect
                x="21"
                y="28"
                width="20"
                height="20"
                fill="#60A5FA"
                rx="2"
              />
            </svg>

            {/* Stars */}
            <div className="absolute top-1/3 left-20">
              <svg width="50" height="50" viewBox="0 0 50 50">
                <polygon
                  points="25,5 30,20 45,20 33,28 37,43 25,35 13,43 17,28 5,20 20,20"
                  fill="#FCD34D"
                />
              </svg>
            </div>
            <div className="absolute bottom-1/4 right-1/4">
              <svg width="50" height="50" viewBox="0 0 50 50">
                <polygon
                  points="25,5 30,20 45,20 33,28 37,43 25,35 13,43 17,28 5,20 20,20"
                  fill="#F9A8D4"
                />
              </svg>
            </div>

            {/* Crayons */}
            <svg
              className="absolute top-2/3 right-20 w-24 h-24"
              viewBox="0 0 60 60"
            >
              <rect
                x="15"
                y="10"
                width="8"
                height="40"
                fill="#F87171"
                rx="1"
                transform="rotate(15 19 30)"
              />
              <rect
                x="25"
                y="15"
                width="8"
                height="40"
                fill="#A78BFA"
                rx="1"
                transform="rotate(-10 29 35)"
              />
              <rect
                x="35"
                y="10"
                width="8"
                height="40"
                fill="#FCD34D"
                rx="1"
                transform="rotate(5 39 30)"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Sparkles className="w-16 h-16 text-yellow-500 animate-pulse" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Nurturing Young Minds
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                A warm, engaging Montessori environment where children explore,
                discover, and grow at their own pace
              </p>
              <button
                onClick={() => navigateToSection("fees")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Enroll Now
              </button>
            </div>

            {/* Main Content Sections */}
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <p className="text-gray-700 leading-relaxed mb-8">
                  Welcome to La Habra Montessori Preschool located in the heart
                  of La Habra, California. Our school has a fully qualified,
                  dedicated and trained staff to take care of your precious
                  child. Our prepared classrooms are equipped with Montessori
                  materials for early learning which offer an exciting array of
                  choices to inspire your child to reach his/her highest
                  potential.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  OUR MISSION
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our mission is to provide a nurturing, creative, stimulating,
                  clean, and safe environment in which our children can grow to
                  his/her fullest potential, physically, emotionally and
                  intellectually in a culturally diverse environment which is
                  affordable to parents.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  CITIES WE SERVE
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  La Habra, Whittier, La Mirada, Brea, Fullerton, Buena Park,
                  Bellflower
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  AGES SERVED
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We provide care for infants (6 months-2 years), preschool
                  children (2-5 years), Kindergarten as well as after and before
                  school for school aged children
                </p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  WHAT WE OFFER
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3">•</span>
                    <span className="text-gray-700">
                      Extended hours - Open 6:30 a.m. - 6:00 p.m.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3">•</span>
                    <span className="text-gray-700">Infant & toddler care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3">•</span>
                    <span className="text-gray-700">Preschool</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3">•</span>
                    <span className="text-gray-700">Kindergarten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3">•</span>
                    <span className="text-gray-700">
                      Before and After school Care
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3">•</span>
                    <span className="text-gray-700">
                      Pick Up and Drop Off Service
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3">•</span>
                    <span className="text-gray-700">
                      Free breakfast, lunch and snacks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3">•</span>
                    <span className="text-gray-700">Homework Assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-3">•</span>
                    <span className="text-gray-700">
                      Extra-Curricular Activities
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Reviews Section */}
            <Reviews />

            {/* Bottom Information Section */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl p-12 mt-16 text-white shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">TAKE A TOUR</h3>
                  <p className="mb-8 leading-relaxed">
                    Make an appointment and we will give you a comprehensive
                    guided tour. Give your child a gift of an education and
                    incredible social skills development.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">
                    HOURS OF OPERATION
                  </h3>
                  <p className="mb-2">6:30 a.m. - 6:00 p.m.</p>
                  <p className="mb-8">
                    Extra Cost Extended Hours available until 8:00 p.m.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">GET IN TOUCH</h3>
                  <p className="mb-2">
                    230 S. Idaho Street, La Habra, CA 90631
                  </p>
                  <p className="mb-2">Main line : (562) 691-6450</p>
                  <p className="mb-6">Enrollment Inquiries : (626) 224-5259</p>

                  <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition-all">
                    CLICK TO SEND E-MAIL
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold mb-6">MAP</h3>
                  <a
                    href="https://www.google.com/maps/place/230+S+Idaho+St,+La+Habra,+CA+90631/@33.930173,-117.9610923,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd2acda2a7c569:0xae44b140a54cb7f3!8m2!3d33.930173!4d-117.9589036?shorturl=1&shorturl=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-8 mb-8 hover:shadow-xl transition-shadow"
                  >
                    <MapPin className="w-32 h-32 text-blue-500 mx-auto" />
                    <p className="text-gray-800 font-bold text-center mt-4">
                      CLICK HERE FOR
                      <br />
                      MAP & DIRECTIONS
                    </p>
                  </a>

                  <div className="flex gap-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                    >
                      <span className="text-white font-bold">t</span>
                    </a>
                    <a
                      href="https://www.instagram.com/lahabramontessori/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                    >
                      <span className="text-white font-bold">i</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@lahabramontessoripreschool2714"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                    >
                      <span className="text-white font-bold">▶</span>
                    </a>
                    <a
                      href="https://www.facebook.com/montessoripreschoolLaHabra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                    >
                      <span className="text-white font-bold">f</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fees Section */}
      {activeSection === "fees" && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">FEES</h2>
            <p className="text-gray-600 mb-2">
              Please feel free to call and ask any questions. These prices are
              based on prepayment of tuition before the beginning of the month.
            </p>
            <p className="text-gray-700 font-semibold underline">
              Payments that are late by 30 days or more have higher rates of
              tuition in addition to late fees.
            </p>
          </div>

          {!calculatedFees ? (
            <>
              {/* Fee Calculator Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  Calculate Your Enrollment Fees
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Child/Children Age(s) *
                    </label>
                    {formData.children.map((child, index) => (
                      <div key={index} className="flex gap-3 mb-3">
                        <select
                          value={child.age}
                          onChange={(e) =>
                            handleChildAgeChange(index, e.target.value)
                          }
                          required
                          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        >
                          <option value="">Select age (in months)</option>
                          {[...Array(49)].map((_, i) => {
                            const months = i + 18;
                            return (
                              <option key={months} value={months}>
                                {months} months ({Math.floor(months / 12)} years{" "}
                                {months % 12} months)
                              </option>
                            );
                          })}
                        </select>
                        {formData.children.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeChild(index)}
                            className="px-4 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addChild}
                      className="mt-2 px-6 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all font-medium"
                    >
                      + Add Another Child
                    </button>
                  </div>

                  <button
                    onClick={calculateFees}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    Find Rates
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Calculated Fees Result */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart
                      className="w-8 h-8 text-green-600"
                      fill="currentColor"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Thank you, {formData.parentName}!
                  </h3>
                  <p className="text-gray-600">
                    Here's your personalized fee breakdown
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">
                        Registration Fee
                      </span>
                      <span className="text-2xl font-bold text-blue-600">
                        ${calculatedFees.registration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      One-time, non-refundable
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6">
                    <div className="font-semibold text-gray-700 mb-3">
                      Material Fees (Annual School Supplies)
                    </div>
                    {formData.children.map((child, index) => {
                      const age = parseInt(child.age);
                      return (
                        <div
                          key={index}
                          className="flex justify-between items-center mb-2"
                        >
                          <span className="text-gray-600">
                            Child {index + 1} ({age} months /{" "}
                            {Math.floor(age / 12)} years)
                          </span>
                          <span className="text-xl font-bold text-purple-600">
                            ${calculatedFees.materials[index]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                      Initial Total (Registration + Materials)
                    </span>
                    <span className="text-3xl font-bold">
                      $
                      {calculatedFees.registration +
                        calculatedFees.materials.reduce((a, b) => a + b, 0)}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Important Notes:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      • Security deposit is waived with good credit rating
                    </li>
                    <li>
                      • Tuition is due even if the child is absent due to
                      illness or vacation
                    </li>
                    <li>
                      • Prepayment of tuition before the beginning of the month
                      qualifies for the rates shown
                    </li>
                    <li>
                      • Payments late by 30 days or more incur higher tuition
                      rates plus late fees
                    </li>
                    <li>
                      • Monthly tuition is payable at the beginning of the week
                      or before the 5th if paying monthly
                    </li>
                  </ul>
                </div>

                <button
                  onClick={resetForm}
                  className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all mb-8"
                >
                  Calculate for Another Family
                </button>
              </div>

              {/* Static Fee Information */}
              <div className="space-y-8">
                {/* Registration & Basic Fees */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-6">
                    REGISTRATION FEE
                  </h3>
                  <p className="text-center text-gray-700 mb-4">
                    One time nonrefundable Registration fee of $150
                  </p>

                  <h3 className="text-xl font-bold text-center mt-8 mb-3">
                    SECURITY DEPOSIT
                  </h3>
                  <p className="text-center text-gray-700 mb-4">
                    Waived with good credit rating
                  </p>

                  <h3 className="text-xl font-bold text-center mt-8 mb-3">
                    ABSENCES
                  </h3>
                  <p className="text-center text-gray-700">
                    Tuition is due on school closures or if the child is absent
                    due to illness or vacation
                  </p>
                </div>

                {/* Material Fees */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-center mb-4">
                    MATERIAL FEE (ANNUAL SCHOOL SUPPLIES)
                  </h3>
                  <p className="text-center text-gray-700">
                    $ 100/- (Ages 18 months – 3 years), 150/- (4- 5 years)
                  </p>
                </div>

                {/* Additional Fees */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-center mb-4">
                      LATE FEE
                    </h3>
                    <p className="text-center text-gray-700">
                      $25 per incident. Tuition is payable is due at the
                      beginning of the week or before the 5th if paying monthly.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-center mb-4">
                      RETURN CHECK FEE
                    </h3>
                    <p className="text-center text-gray-700">
                      $35 per incident
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-center mb-4">
                      LATE PICKUP FEE
                    </h3>
                    <p className="text-center text-gray-700">
                      Children picked up late will be charged $1 per minute.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-center mb-4">
                      SIBLING DISCOUNT
                    </h3>
                    <p className="text-center text-gray-700">
                      10% Sibling discount may apply on the lesser amount
                    </p>
                    <p className="text-center text-gray-600 text-sm mt-2">
                      Sibling discounts are not given to siblings in the
                      infant/toddler room.
                    </p>
                  </div>
                </div>

                {/* Tuition Rates */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-3xl font-bold text-center mb-4">
                    TUITION RATES
                  </h3>
                  <p className="text-center text-gray-700 mb-8">
                    Tuition includes breakfast, lunch, snack, arts and crafts,
                    and music and movement. Only applies to ages 2 and up.
                  </p>

                  {/* Infant Care Table */}
                  <div className="mb-8 overflow-x-auto">
                    <h4 className="text-xl font-bold bg-cyan-400 text-white p-3 text-center">
                      INFANT CARE (7:30 A.M- 5:30 P.M)
                    </h4>
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 p-3">
                            2 Days per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            3 Days Per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            5 Days Per Week
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            $350 Per week or $1400 per Month
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="3"
                            className="border border-gray-300 p-3 text-center bg-gray-50"
                          >
                            Extended Daycare fees - $35 per day
                            <br />
                            Extended care is if a childcare is provided for more
                            than 08 hrs per day.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Toddler Care Table */}
                  <div className="mb-8 overflow-x-auto">
                    <h4 className="text-xl font-bold bg-cyan-400 text-white p-3 text-center">
                      TODDLER CARE - 18-24 MONTHS (7:30 A.M- 5:30 P.M)
                    </h4>
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 p-3">
                            2 Days per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            3 Days Per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            5 Days Per Week
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            $300 Per week or $1200 per Month
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="3"
                            className="border border-gray-300 p-3 text-center bg-gray-50"
                          >
                            Extended Daycare fees - $30 per day
                            <br />
                            Extended care is if a childcare is provided for more
                            than 08 hrs per day.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Preschool 2-3 Years Table */}
                  <div className="mb-8 overflow-x-auto">
                    <h4 className="text-xl font-bold bg-cyan-400 text-white p-3 text-center">
                      PRESCHOOL 2-3 YEARS 6:30 A.M. - 6:00 P.M.)
                    </h4>
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 p-3">
                            2 Days per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            3 Days Per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            5 Days Per Week
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-gray-300 p-3 text-center">
                            CALL
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            CALL
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            $250 Per Week or $1000 Per Month
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="3"
                            className="border border-gray-300 p-3 text-center bg-gray-50"
                          >
                            Extended Daycare fees - $25 per day
                            <br />
                            Extended care is if a childcare is provided for more
                            than 08 hrs per day.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Preschool 4-5 Years Table */}
                  <div className="mb-8 overflow-x-auto">
                    <h4 className="text-xl font-bold bg-cyan-400 text-white p-3 text-center">
                      PRESCHOOL 4-5 YEARS 6:30 A.M. - 6:00 P.M.)
                    </h4>
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 p-3">
                            2 Days per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            3 Days Per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            5 Days Per Week
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-gray-300 p-3 text-center">
                            CALL
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            CALL
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            $200 Per Week or $800 Per Month
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="3"
                            className="border border-gray-300 p-3 text-center bg-gray-50"
                          >
                            Extended Daycare fees - $20 per day
                            <br />
                            Extended care is if a childcare is provided for more
                            than 08 hrs per day.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* TKG Table */}
                  <div className="mb-8 overflow-x-auto">
                    <h4 className="text-xl font-bold bg-cyan-400 text-white p-3 text-center">
                      TKG - Before and Aftercare with transport
                    </h4>
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 p-3">
                            2 Days per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            3 Days Per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            5 Days Per Week
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            $200 Per Week or $800 Per Month
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* TKG Before OR Aftercare */}
                  <div className="mb-8 overflow-x-auto">
                    <h4 className="text-xl font-bold bg-cyan-400 text-white p-3 text-center">
                      TKG - Before OR Aftercare with transport
                    </h4>
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 p-3">
                            2 Days per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            3 Days Per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            5 Days Per Week
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            $180 Per Week or $720 Per Month
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="3"
                            className="border border-gray-300 p-3 text-center bg-gray-50"
                          >
                            $200 Per week during public school vacation for 8
                            hours of care
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* KG - 7th Grade before and after */}
                  <div className="mb-8 overflow-x-auto">
                    <h4 className="text-xl font-bold bg-cyan-400 text-white p-3 text-center">
                      KG - 7th Grade before and after Care
                    </h4>
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 p-3">
                            2 Days per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            3 Days Per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            5 Days Per Week
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            $190 Per Week or $760 Per Month
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="3"
                            className="border border-gray-300 p-3 text-center bg-gray-50"
                          >
                            $200 Per week during public school vacation for 8
                            hours of care
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* KG - 7th Grade OR and after */}
                  <div className="mb-8 overflow-x-auto">
                    <h4 className="text-xl font-bold bg-cyan-400 text-white p-3 text-center">
                      KG - 7th Grade OR and after Care
                    </h4>
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 p-3">
                            2 Days per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            3 Days Per week
                          </th>
                          <th className="border border-gray-300 p-3">
                            5 Days Per Week
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            N/A
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            $175 Per Week or $700 Per Month
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="3"
                            className="border border-gray-300 p-3 text-center bg-gray-50"
                          >
                            $200 Per week during public school vacation for 8
                            hours of care
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* About Us Section */}
      {activeSection === "about us" && <AboutUs />}

      {/* Why Montessori Section */}
      {activeSection === "why montessori" && <WhyMontessori />}

      {/* Montessori Video Section */}
      {activeSection === "montessori video" && <MontessoriVideo />}

      {/* Facilities Section */}
      {activeSection === "facilities" && <Facilities />}

      {/* Tour & Interview Section */}
      {activeSection === "tour & interview" && <TourInterview />}

      {/* Admission Forms Section */}
      {activeSection === "admission forms" && <AdmissionForms />}

      {/* Orange Class Section */}
      {activeSection === "orange (infants)" && <OrangeClass />}

      {/* Blue Class Section */}
      {activeSection === "blue class" && <BlueClass />}

      {/* Green Class Section */}
      {activeSection === "green class" && <GreenClass />}

      {/* Yellow Class Section */}
      {activeSection === "yellow class" && <YellowClass />}

      {/* Gallery Section */}
      {activeSection === "gallery" && <Gallery />}

      {/* Other Sections Placeholder */}
      {![
        "home",
        "fees",
        "about us",
        "why montessori",
        "montessori video",
        "facilities",
        "tour & interview",
        "admission forms",
        "orange (infants)",
        "blue class",
        "green class",
        "yellow class",
        "gallery",
      ].includes(activeSection) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 capitalize">
              {activeSection}
            </h2>
            <p className="text-gray-600 text-lg">
              Content for this section is coming soon!
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">La Habra Montessori</h3>
              <p className="text-gray-300">
                Nurturing young minds through the Montessori method
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@lahabramontessori.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-gray-300">Monday - Friday</p>
              <p className="text-gray-300">7:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 La Habra Montessori. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreschoolWebsite;
