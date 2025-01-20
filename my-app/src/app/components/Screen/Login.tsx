"use client";
import { useState } from "react";
import Image from "next/image";
export default function Login() {
  const [userLogin, setUserLogin] = useState("");



  const handleLogin = () => {
    // Add login functionality here
  };

  const handleGoogleLogin = () => {
    // Add Google login functionality here
    console.log("Google login button pressed");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lwhite overflow-hidden relative bg-[url('/images/ai.png')] bg-cover bg-center">
      <div className="relative border-lsate border-4 -translate-y-20 px-20 py-32 rounded-[20px] bg-lslate shadow-2xl">
        <Image
          src="/images/tysoncloud.png"
          alt="TysonCloud"
          width={300}
          height={150}
          className="justify-center absolute top-5"
        />

        <div className="text-center flex flex-col mt-7">
          <input
            className="border-1 rounded-md mt-5 mb-3 py-2 pl-2 shadow-soft-white text-lslate"
            type="text"
            placeholder="Email"
          />
          <input
            className="border-1 rounded-md mt-1 py-2 pl-2 shadow-soft-white text-lslate"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex flex-col items-center mt-11 space-y-3">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-28 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign In
          </button>

          <button
            onClick={handleGoogleLogin}
            className="border-2 border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 hover:bg-opacity-15 transition flex items-center space-x-2"
          >
            <Image
              src="/images/google.png"
              alt="Google Icon"
              width={30}
              height={30}
              className=""
            />
            <span>Sign In with Google</span>
          </button>
        </div>

        <div className="text-center mt-5 text-lwhite absolute">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </div>
      </div>
    </div>
  );
}