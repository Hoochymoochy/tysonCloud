"use client";

import { useState } from "react";
import Image from "next/image";

export default function Login() {
  const [userLogin, setUserLogin] = useState("");

  const onPress = () => {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lwhite overflow-hidden relative">
      <div className="relative border-lsate border-4 -translate-y-20 px-[10%] py-[30%] rounded-[20px] bg-lslate shadow-2xl">
      <Image
            src="/images/tysoncloud.png" // Reference image relative to the `public` folder
            alt="TysonCloud"
            width={300} 
            height={150}
            className= "justify-center relative top-0"
          />
        <div className="-translate-y-10 text-center">
          <input
            className=" border-1 rounded-md my-5 py-2 pl-2 shadow-soft-white"
            type="text"
            placeholder="username"
          ></input>
        </div>
        <input
          className=" border-1 rounded-md my-5 py-2 pl-2 shadow-soft-white"
          type="text"
          placeholder="  username"
        ></input>
      </div>
    </div>
  );
}
