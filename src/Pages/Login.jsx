import React from 'react'
import Twitter from "../assets/images/Twitter.jpg"
import { useNavigate } from "react-router-dom";
  
const Login = () => {
   
  const navigate = useNavigate()
  const handleLogin = () => {
    // Perform any login validation here if needed
    navigate("/home"); // Redirects to the home page
  };

  return (

<>
<div className="bg-cyan-100 w-full min-h-screen p-4 flex justify-center">
  <div className="bg-white w-[40%] p-6 flex flex-col my-3 rounded-lg shadow-lg">
    <div className="mx-auto h-30 w-30 mt-[-25px] mb-6">
      <img className="object-contain  bg-white" src={Twitter} alt="Twitter" />
    </div>

    <span className="text-gray-700 block text-left mb-2">UserName</span>
    <input
  className="w-full px-4 py-2 text-gray-950 font-sm font-normal rounded-md outline-none focus:ring-2 focus:ring-blue-600 mb-4 placeholder-black"
  type="text"
  placeholder="Dummy_User"
/>


    <span className="text-gray-700 block text-left mb-2 ">Password</span>
    <input
  className="w-full px-4 py-2 text-gray-950 font-sm font-normal rounded-md outline-none focus:ring-2 focus:ring-blue-600 mb-4 placeholder-black"
  type="password"
  placeholder="••••••••"
/>

    <button onClick={handleLogin} className="bg-blue-600 text-white w-full py-3 rounded-md hover:bg-blue-700 transition-all mb-4 font-semibold">
      Log In
    </button>
    <p className="text-blue-700 hover:underline text-center mb-2 cursor-pointer font-normal py-4 text-sm">
  Forget Password?
</p>

    

    <p className="text-gray-600 text-center text-sm">
      Don't Have Account? 
      <span className="text-blue-600 font-bold hover:underline cursor-pointer"> SignUp</span>
    </p>
  </div>
</div>

</>
  )
}
export default Login;