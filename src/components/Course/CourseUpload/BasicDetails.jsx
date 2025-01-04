// src/components/BasicDetails.js
import React from "react";
import apiClient from "../../../api/client";

const BasicDetails = ({ formData, handleInputChange, handleFileChange, handleNextTab }) => {

const  createCourse =async()=>{
  const response =  await apiClient.post("/course/createCourse",)
}




  return (
    <div className="bg-white p-6 shadow-xl rounded-xl space-y-6">
      <form>
        <div className="space-y-4">
          <div className="mb-4">
            <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700">Course Title</label>
            <input
              id="courseTitle"
              name="courseTitle"
              type="text"
              placeholder="Short name of course"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              value={formData.courseTitle}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fullCourseName" className="block text-sm font-medium text-gray-700">Full Course Name</label>
            <input
              id="fullCourseName"
              name="fullCourseName"
              type="text"
              placeholder="Enter full course name"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              value={formData.fullCourseName}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="provider" className="block text-sm font-medium text-gray-700">Course Provider</label>
            <input
              id="provider"
              name="provider"
              type="text"
              placeholder="Enter course provider name"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              value={formData.provider}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
            <input
              id="duration"
              name="duration"
              type="text"
              placeholder="Enter duration of the course"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              value={formData.duration}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fees" className="block text-sm font-medium text-gray-700">Fees</label>
            <input
              id="fees"
              name="fees"
              type="text"
              placeholder="Enter total fees of the course"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              value={formData.fees}
              onChange={handleInputChange}
            />
          </div>

          {/* Add thumbnail upload field here */}
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Course Thumbnail</label>
            <input
              id="thumbnail"
              name="thumbnail"
              type="file"
              accept="image/*"
              className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c] transition duration-300 ease-in-out"
              onChange={handleFileChange} // Reuse the existing file change handler
            />
          </div>

          
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
