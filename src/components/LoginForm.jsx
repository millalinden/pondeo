import Button from "./shared/Button";

const LoginForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  setIsLogin,
}) => {
  return (
    <div>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <h3 className="uppercase text-5xl font-semibold mb-5">Welcome back</h3>
        <p className="text-lg">It´s nice to have you back!</p>
          <p className="text-lg mb-5">Please log in to access your account.</p>
        <form className="flex flex-col text-center w-[21rem]">
          <input
            type="text"
            placeholder="Enter your email"
            className="border py-3 px-4 text-center rounded-full mb-4 w-[21rem]"
          ></input>
          <Button label="Continue" className="py-4" />
          <div className="flex mt-7 justify-center items-center">
            <p className="mr-10">Dont have an account?</p>
            <a>Sign up</a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;
