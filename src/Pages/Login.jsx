import React from "react";
import Twitter from "../assets/images/twitter.webp";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Perform any login validation here if needed
    navigate("/home"); // Redirects to the home page
  };

  return (
    <>
      <div className="bg-blue-100 w-full min-h-screen p-4 flex justify-center">
        <div className="bg-white w-[35%] p-6 flex flex-col my-3 rounded-lg shadow-lg">
          <div className="  mx-auto h-15 w-15 mb-3">
            <img
              className="object-contain cursor-pointer  h-12 w-12"
              src={Twitter}
              alt="Twitter"
            />
          </div>
          <h1 className="mx-auto text-2xl font-bold mb-4 cursor-pointer">
            Log in To Twitter
          </h1>

          <span className="text-gray-700 block text-left mb-1">Username</span>
          <input
            className="w-full px-4 py-3 border border-gray-200 text-gray-950 font-sm font-normal rounded-md outline-none focus:ring-2 focus:ring-blue-600 mb-4 placeholder-black"
            type="text"
            placeholder="dummy_user"
          />

          <span className="text-gray-700 block text-left mb-1">Password</span>
          <input
            className="w-full px-4 py-3 text-gray-950 border border-gray-200 font-base font-normal rounded-md outline-none focus:ring-2 focus:ring-blue-600 mb-4 placeholder-black"
            type="password"
            placeholder="••••••••"
          />

          <button
            onClick={handleLogin}
            className="bg-blue-500 cursor-pointer text-white w-full py-3 rounded-md hover:bg-blue-600 transition-all mb-4 font-semibold"
          >
            Log In
          </button>
          <p className="text-blue-500 hover:underline text-center mb-2 cursor-pointer font-normal py-4 text-sm">
            Forget Password?
          </p>

          <p className="text-gray-600 text-center text-sm">
            Don't Have Account?
            <span className="text-blue-500 font-bold hover:underline cursor-pointer">
              {" "}
              SignUp
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
