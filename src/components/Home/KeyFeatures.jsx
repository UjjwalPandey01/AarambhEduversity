import React from "react";
import { FaBook, FaChalkboardTeacher, FaIndustry, FaGlobe } from "react-icons/fa";

const KeyFeatures = () => {
  const features = [
    {
      icon: <FaBook />,
      title: "Expert Instructors",
      description: "Learn from industry leaders with real - world expertise and experience.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Flexible Learning",
      description: "Access courses anytime, anywhere, on any device, hassle-free.",
    },
    {
      icon: <FaIndustry />,
      title: "Affordable Pricing",
      description: "Quality education at pocket-friendly prices for every learner.",
    },
    {
      icon: <FaGlobe />,
      title: "Comprehensive Support",
      description: "Dedicated assistance and resources to ensure your learning success.",
    },
  ];

  return (
    <div className="key-features bg-gradient-to-b from-gray-50 to-gray-200 py-16 p-6 lg:px-[9%] md:[8%]">
      <h2 className="text-center text-3xl font-bold mb-12 text-[#85132c]">
        Why Choose Us
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative w-full h-64 md:h-72 lg:h-64 perspective-1000"
          >
            {/* Card Wrapper */}
            <div className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
              {/* Card Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-[#85132c] rounded-lg backface-hidden">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl text-center font-bold">{feature.title}</h3>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#85132c] text-white text-center rounded-lg  rotate-y-180 backface-hidden">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
