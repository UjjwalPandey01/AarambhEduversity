import React, { useState } from "react";
// import axios from "axios";
import logo from "../images/ACPL Eduversity Logo.png";
import apiClient from "../../api/client";
function EnrollmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    course: "",
    institution: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiClient.post(
        "/enrollStudents",
        formData
      );
      console.log("Enrollment successful:", response.data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit the form.");
      console.log(err)
    }
  };

  return (

    <div className="bg-[#1d3557] pt-6 rounded shadow-md max-w-md mx-auto ">
      <div className="flex justify-center py-2 bg-white">
        {/* Logo */}
        <img
          src={logo} // Path to the logo
          alt="Eduversity Logo"
          className="h-14 w-56" // Adjust height as needed
        />
      </div>
      <div className="px-4 pt-1 pb-12">

        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-3 text-center">Enroll with us</h2>

        {/* Form */}
        <form className="space-y-5 " onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <input 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name*"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yourname@email.com*"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>

          {/* Mobile Number Input */}
          <div className="flex items-center">
            <span className="bg-gray-200 px-4 py-2 border border-r-0 border-gray-300 rounded-l text-sm">
              +91
            </span>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter mobile number*"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-[#e63946]"
            />
          </div>
          {/* Category Select */}
          <select
            type="course"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            required
          >
            <option value="" disabled selected>
              Select category*
            </option>
            {/* Add course options */}
            <option value="web-development">Web Development</option>
            <option value="data-science">Data Science</option>
            <option value="machine-learning">Machine Learning</option>
            <option value="cloud-computing">Cloud Computing</option>
            <option value="cyber-security">Cyber Security</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="ui-ux-design">UI/UX Design</option>
          </select>

          {/* Course Select */}
          <select
            name="institution"
            // value={formData.institution}
            // onChange={handleChange}
            type="text"
              id="institution"
              value={formData.institution}
              onChange={handleChange}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            required
          >
            <option value="" disabled selected>
              Select course*
            </option>
            {/* Add institution options */}
            <option value="stanford-university">Stanford University</option>
            <option value="harvard-university">Harvard University</option>
            <option value="bits-pilani">BITS Pilani</option>
            <option value="amity-university">Amity University</option>
          </select>

          {/* Consent Checkbox */}
          <div className="flex items-start text-white text-sm">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              // value={formData.consent}
              onChange={handleChange}
              checked={formData.consent}
              className="mt-1.5 mr-2 h-4 w-4 border-gray-300 rounded focus:ring-[#e63946]"
            />
            <label htmlFor="consent" className="leading-none text-xs">
              I authorize Online Manipal and its associates to contact me via email, SMS, WhatsApp, and voice calls. This consent will override any registration for DNC/NDNC.
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#e63946] hover:bg-[#d92e3e] text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e63946] text-sm"
            >
              Enroll Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnrollmentForm;
