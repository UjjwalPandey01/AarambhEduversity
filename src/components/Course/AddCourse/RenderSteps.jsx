import { FaCheck } from "react-icons/fa"
import React, { useState } from "react"

import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
import CourseInformationForm from "./CourseInformation/CourseInformationForm"
import PublishCourse from "./PublishCourse"

export default function RenderSteps() {
  // Local state to manage the current step
  const [step, setStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ]

  const handleNextStep = () => {
    if (step < steps.length) {
      setStep((prevStep) => prevStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1)
    }
  }

  return (
    <>
      <div className="relative mb-2 flex w-full justify-center">
        {steps.map((item) => (
          <div
            className="flex flex-col items-center"
            key={item.id}
          >
            <button
              className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                step === item.id
                  ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                  : "border-richblack-700 bg-richblack-800 text-richblack-300"
              } ${step > item.id && "bg-yellow-50 text-yellow-50"}`}
            >
              {step > item.id ? (
                <FaCheck className="font-bold text-richblack-900" />
              ) : (
                item.id
              )}
            </button>
            {item.id !== steps.length && (
              <div
                className={`h-[calc(34px/2)] w-[33%] border-dashed border-b-2 ${
                  step > item.id ? "border-yellow-50" : "border-richblack-500"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="relative mb-16 flex w-full select-none justify-between">
        {steps.map((item) => (
          <div
            className="flex min-w-[130px] flex-col items-center gap-y-2"
            key={item.id}
          >
            <p
              className={`text-sm ${
                step >= item.id ? "text-richblack-5" : "text-richblack-500"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Render specific component based on current step */}
      {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseBuilderForm />}
      {step === 3 && <PublishCourse />}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousStep}
          disabled={step === 1}
          className="px-4 py-2 text-sm text-white bg-gray-700 rounded disabled:bg-gray-500"
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={step === steps.length}
          className="px-4 py-2 text-sm text-white bg-blue-700 rounded disabled:bg-blue-500"
        >
          Next
        </button>
      </div>
    </>
  )
}
