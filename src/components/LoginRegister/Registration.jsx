import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "../../api/client";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  //const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const {
      fullName,
      dateOfBirth,
      gender,
      email,
      contactNumber,
      password,
      confirmPassword,
    } = formData;

    if (!fullName.trim()) {
      toast.error("Full Name is required.");
      return false;
    }
    if (!dateOfBirth) {
      toast.error("Date of Birth is required.");
      return false;
    }
    if (!gender) {
      toast.error("Gender is required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Valid Email Address is required.");
      return false;
    }
    const mobileRegex = /^[0-9]{10}$/;
    if (!contactNumber || !mobileRegex.test(contactNumber)) {
      toast.error("Valid 10-digit Mobile Number is required.");
      return false;
    }
    if (!password || password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  
  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!validateForm()) {
      return;
    }

    try {
      const result = await apiClient.post("/auth/signup",
     
      formData
    );

       navigate("/login"); // Navigate only on success
    } catch (error) {
      if (error.data && error.data.message) {
        toast.error(error.data.message); // Display error from server
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Student Registration
        </h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="dateOfBirth"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="accountType"
            >
              Select accountType
            </label>
            <select
              id="accountType"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="contactNumber"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Enter a password (min. 8 characters)"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2 right-3 text-gray-600 focus:outline-none"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
              placeholder="Re-enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#85132c] text-white py-2 px-4 rounded transition duration-200"
          >
            Submit
          </button>
        </form>
        <div className="w-full text-gray-700 text-center mt-3 pr-4 rounded ">
          Already Registered{" "}
          <a href="/login" className="bg-[#85132c] text-white rounded-lg p-1">
            Login
          </a>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default StudentRegistration;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import apiClient from "../../api/client";
// import useAuth from "../../auth/useAuth";

// const StudentRegistration = () => {

//   const sendOtp = async (email) => {
//     try {
//       const response = await apiClient.post("/auth/sendotp", { email });
//       return response.data; // { message: "OTP sent to email." }
//     } catch (error) {
//       throw error.response ? error.response.data : { message: "An error occurred." };
//     }
//   };

//   const signup = async () => {
//     try {
//       const response = await apiClient.post("/auth/signup", formData);
//       return response.data; // { message: "Registration successful!" }

//     } catch (error) {
//       throw error.response ? error.response.data : { message: "An error occurred." };
//     }
//   };

//   const [formData, setFormData] = useState({
//     fullName: "",
//     DOB: "",
//     gender: "",
//     accountType:"",
//     email: "",
//     contactNumber: "",
//     password: "",
//     confirmPassword: "",
//     otp:"",
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const [otpSent, setOtpSent] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const { fullName, dateOfBirth, gender,accountType, email, contactNumber, password, confirmPassword } = formData;
//     // Validation logic remains the same
//     if (!fullName.trim()) {
//       toast.error("Full Name is required.");
//       return false;
//     }
//     if (!dateOfBirth) {
//       toast.error("Date of Birth is required.");
//       return false;
//     }
//     if (!gender) {
//       toast.error("Gender is required.");
//       return false;
//     }
//     if (!accountType) {
//       toast.error("accountType is required.");
//       return false;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)) {
//       toast.error("Valid Email Address is required.");
//       return false;
//     }
//     const mobileRegex = /^[0-9]{10}$/;
//     if (!contactNumber || !mobileRegex.test(contactNumber)) {
//       toast.error("Valid 10-digit Mobile Number is required.");
//       return false;
//     }
//     if (!password || password.length < 6) {
//       toast.error("Password must be at least 6 characters long.");
//       return false;
//     }
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match.");
//       return false;
//     }
//     return true;
//     // Assuming validation is successful
//   };

//  const handleSendOtp = async () => {
//     if (!formData.email) {
//       toast.error("Email is required to send OTP.");
//       return;
//     }

//     try {
//       await sendOtp(formData.email);
//       toast.success("OTP sent to your email.");
//       setOtpSent(true);
//     } catch (error) {
//       toast.error(error.message || "Failed to send OTP.");
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (!otpSent) {
//       toast.error("Please verify your email using OTP first.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const { fullName,DOB,gender,accountType, email, contactNumber, password, otp } = formData;
//       if (!fullName || !email || !contactNumber || !password || !otp) {
//         toast.error("All fields are required.");
//         setIsSubmitting(false);
//         return;
//       }

//       await signup({  fullName,DOB,gender,accountType, email, contactNumber, password, otp });
//       toast.success("Registration successful!");
//       setFormData({
//         fullName: "",
//         DOB:"",
//         gender:"",
//         accountType:"",
//         email: "",
//         contactNumber: "",
//         password: "",
//         otp: "",
//       });
//       setOtpSent(false);
//     } catch (error) {
//       toast.error(error.message || "Registration failed.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (

// <div className="min-h-screen bg-white-100 flex items-center justify-center px-4">
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center"> Registration</h2>
//         <form onSubmit={handleSignup}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none"
//               placeholder="Enter your full name"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="DOB">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="DOB"
//               name="DOB"
//               value={formData.DOB}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="gender">
//               Gender
//             </label>
//             <select
//               id="gender"
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="accountType">
//               Select accountType
//             </label>
//             <select
//               id="accountType"
//               name="accountType"
//               value={formData.accountType}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
//             >
//               <option value="">Select Role</option>
//               <option value="Student">Student</option>
//               <option value="Instructor">Instructor</option>

//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none"
//               placeholder="Enter your email"
//             />
//             <button
//               type="button"
//               onClick={handleSendOtp}
//               className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
//             >
//               Send OTP
//             </button>
//           </div>
//           {otpSent && (
//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-2" htmlFor="otp">
//                 OTP
//               </label>
//               <input
//                 type="text"
//                 id="otp"
//                 name="otp"
//                 value={formData.otp}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded focus:outline-none"
//                 placeholder="Enter the OTP sent to your email"
//               />
//             </div>
//           )}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="contactNumber">
//               Mobile Number
//             </label>
//             <input
//               type="text"
//               id="contactNumber"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none"
//               placeholder="Enter your mobile number"
//             />
//           </div>
//           <div className="mb-4 relative">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//              type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
//               placeholder="Enter a password (min. 8 characters)"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute top-2 right-3 text-gray-600 focus:outline-none"
//             >
//              {showPassword ? "🙈" : "👁️"}
//             </button>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#85132c]"
//               placeholder="Re-enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 px-4 rounded"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Submitting..." : "Register"}
//           </button>
//         </form>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default StudentRegistration;
