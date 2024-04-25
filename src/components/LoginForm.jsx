import React from "react";
import ButtonForm from "./shared/ButtonForm";

const LoginForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  setIsLogin,
}) => {
  const handleSignUpClick = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-6">
        <h3 className="text-custom-heading-2-uppercase uppercase text-neon-green">
          Welcome back
        </h3>
        <p className="text-custom-subtitle-1 font-light text-adventure-white text-center mx-10">
          It's nice to have you back!
          <br />
          Please log in to access your account.
        </p>
        <form className="flex flex-col text-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Email"
            className="py-[1vw] px-[1vw] text-center rounded-lg mb-4 bg-[#4E4C4C] placeholder-white"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          ></input>
          <ButtonForm
            type="submit"
            label="Continue"
          />
          <div className="flex mt-14 justify-center items-center">
            <p className="mr-10 text-custom-body-1 font-normal text-adventure-white">
              Don't have an account?
            </p>
            <a
              onClick={handleSignUpClick}
              className="text-neon-green cursor-pointer"
            >
              Sign up
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;
