import React from "react";
import Button from "./shared/Button";

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
      <section className="flex flex-col justify-center items-center gap-8	">
        <h3 className="text-custom-heading-2-uppercase uppercase text-neon-green">
          Welcome back
        </h3>
        <p className="text-custom-subtitle-1 font-light text-adventure-white text-center mx-20">
          It's nice to have you back!
          <br />
          Please log in to access your account.
        </p>
        <form
          className="flex flex-col text-center w-[21rem]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter your Email"
            className="py-4 px-4 text-center rounded-full mb-6 w-[21rem] bg-graymatter-gray"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          ></input>
          <Button type="submit" label="Continue" color={"bg-neon-green py-4"} />
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
