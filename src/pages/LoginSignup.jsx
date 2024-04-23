import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="bg-deep-black text-adventurous-white flex flex-col items-center justify-center h-screen w-full">
      {isLogin ? (
        <LoginForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setIsLogin={setIsLogin}
        />
      ) : (
        <SignUpForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setIsLogin={setIsLogin}
        />
      )}
      <div className="flex items-center justify-center mt-10 w-full">
        <hr className="border-t border-[rgba(179, 179, 179, 1)] w-1/3 mr-4" />
        <span className="text-[#B3B3B3] px-4 text-nowrap text-custom-body-2">Or Continue with</span>
        <hr className="border-t border-[rgba(179, 179, 179, 1)] w-1/3 ml-4" />
      </div>
    </div>
  );
}