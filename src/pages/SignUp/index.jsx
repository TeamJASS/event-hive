import { Link } from "react-router-dom";
import hero from "../../assets/images/signup.png";
import googlelogo from "../../assets/images/googlelogo.svg";

const SignUp = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <div
        className="col-span-2 gap-4 flex flex-col justify-center items-center bg-cover bg-center p-8"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h2 className="text-white text-4xl font-bold mb-4">Welcome Back</h2>
        <p className="text-white mb-6 text-md text-center">
          To keep connected with us, provide us with your information
        </p>
        <Link
          to="/signin"
          className="text-white bg-gray-500 hover:bg-gray-700 px-6 py-4 rounded-lg"
        >
          Sign In
        </Link>
      </div>
      <div className="col-span-3 flex flex-col justify-center items-center p-5 gap-4 bg-[#F8F8FA]">
        <h1 className="text-xl font-bold mb-2">
          Event <span className="text-blue-500">Hive</span>
        </h1>
        <h2 className="text-4xl font-bold mb-6">Sign Up to Event Hive</h2>
        <form className="w-full flex flex-col gap-4 max-w-lg">
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="firstName"
            >
              FIRST NAME
            </label>
            <input
              className="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="userName"
            >
              USER NAME
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              PASSWORD
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="confirmPassword"
            >
              CONFIRM PASSWORD
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center justify-center mb-4 w-1/2 mx-auto">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center mb-4">OR</div>
          <div className="flex items-center justify-center w-1/2 mx-auto">
            <button
              className="w-full flex justify-center gap-2 align-middle items-center hover:bg-red-700 hover:text-white text-gray-700 font-semibold py-2 px-4 border-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <img src={googlelogo} alt="google-logo" />{" "}
              <p className="">Sign Up with Google</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
