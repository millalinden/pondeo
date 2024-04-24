import React from "react";
import Button from "./shared/Button";

const SignUpForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  setIsLogin,
}) => {
  const handleLoginClick = () => {
    setIsLogin(true); // Set isLogin to true to switch to the login form
  };

  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-8	">
        <h3 className="text-custom-heading-2-uppercase uppercase text-neon-green">
          Create an account
        </h3>
        <p className="text-custom-subtitle-1 font-light text-adventure-white text-center mx-20">
          Create your Pondeo account in just a few seconds.
          <br />
          It's easy and fast!
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
              Already have an account?
            </p>
            <a
              onClick={handleLoginClick}
              className="text-neon-green cursor-pointer"
            >
              Login
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUpForm;
