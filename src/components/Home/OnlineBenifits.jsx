import React from "react";

const OnlineBenefits = () => {
  return (
    <div className="bg-white p-6 lg:px-[9%] md:[8%]">
      <div className="p-6 rounded-lg flex flex-col lg:flex-row bg-blue-50">
        {/* Left Section: Benefits */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Online Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="material-icons text-[#85132c] text-3xl mr-4">school</span>
              <div>
                <h3 className="font-semibold text-lg">Learn Anywhere, Anytime</h3>
                <p className="text-gray-600">Study at your convenience with 24/7 course access online.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="material-icons text-[#85132c] text-3xl mr-4">local_offer</span>
              <div>
                <h3 className="font-semibold text-lg">Affordable Learning</h3>
                <p className="text-gray-600">Save costs with budget-friendly courses and no travel expenses.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="material-icons text-[#85132c] text-3xl mr-4">menu_book</span>
              <div>
                <h3 className="font-semibold text-lg">Wide Course Selection</h3>
                <p className="text-gray-600">Choose from diverse programs across fields and skill levels.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="material-icons text-[#85132c] text-3xl mr-4">watch_later</span>
              <div>
                <h3 className="font-semibold text-lg">Self-Paced Learning</h3>
                <p className="text-gray-600">Complete courses at your own speed without strict schedules.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="material-icons text-[#85132c] text-3xl mr-4">ondemand_video</span>
              <div>
                <h3 className="font-semibold text-lg">Interactive Content</h3>
                <p className="text-gray-600">Engage with videos, quizzes, and assignments for effective learning.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="material-icons text-[#85132c] text-3xl mr-4">emoji_events</span>
              <div>
                <h3 className="font-semibold text-lg">Expert-Led Programs</h3>
                <p className="text-gray-600">Gain insights from professionals with proven industry experience.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="material-icons text-[#85132c] text-3xl mr-4">assignment_turned_in</span>
              <div>
                <h3 className="font-semibold text-lg">Certification Advantage</h3>
                <p className="text-gray-600">Receive certificates to boost career opportunities and credibility.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="material-icons text-[#85132c] text-3xl mr-4">public</span>
              <div>
                <h3 className="font-semibold text-lg">Global Accessibility</h3>
                <p className="text-gray-600">Connect and learn with peers from across the world.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center items-center">
          <img
            src="/images/benifits.jpg"
            alt="Online Benefits"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default OnlineBenefits;
