import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";
import GradientCircle from "../components/shared/GradientCircle";
import Section from "../components/shared/Section";

import googleIcon from "../assets/google.svg";
import facebookIcon from "../assets/facebook.svg";
import appleIcon from "../assets/apple.svg";

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
    <Section
      styling={
        "gap-4 bg-deep-black text-adventurous-white flex-col items-center justify-center"
      }
    >
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
        <span className="text-adventure-white px-4 text-nowrap text-custom-body-1 font-regular">
          Or Continue with
        </span>
        <hr className="border-t border-[rgba(179, 179, 179, 1)] w-1/3 ml-4" />
      </div>
      <div className="flex gap-8">
        <button className="flex items-center justify-center focus:outline-none">
          <GradientCircle icon={googleIcon} alt="Google Icon" />
        </button>
        <button className="flex items-center justify-center focus:outline-none">
          <GradientCircle icon={facebookIcon} alt="Facebook Icon" />
        </button>
        <button className="flex items-center justify-center focus:outline-none">
          <GradientCircle icon={appleIcon} alt="Apple Icon" />
        </button>
      </div>
    </Section>
  );
}
