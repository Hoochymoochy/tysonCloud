"use client";
import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  const [side, setSide] = useState(false);

  const toggleSidebar = () => {
    setSide(!side);
  };

  return (
    <div className="bg-lslate flex min-h-screen">
      {/* Top Bar */}
      <div className="bg-black text-white fixed top-0 left-0 w-full h-20 flex items-center px-4">
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-gray-400 focus:outline-none"
        >
          Toggle Sidebar
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          side ? "w-0 border-0 bg-lslate border-lslate" : "w-80"
        } bg-white shadow-lg fixed left-0 top-20 h-full border-l border-gray-200 transition-all duration-300`}
      >
        <button
          className="absolute right-4 top-4 flex items-center"
          onClick={toggleSidebar}
        >
          <Image
            src="/images/back-arrow.png"
            alt="TysonCloud"
            width={40}
            height={40}
            className="justify-center"
          />
        </button>

        {!side && (
          <>
            <h2 className="text-lg font-semibold p-4 border-b border-gray-300">
              Sidebar Title
            </h2>
            <div className="p-4">
              <p>Content inside the sidebar.</p>
            </div>
          </>
        )}
      </div>

      {/* User Area */}
      <div className="bg-lslate min-h-screen w-full top-20 left-80 fixed hover:bg-opacity-15 ease-in-out duration-300 mt-24">
        <div className="flex items">
          <button className="bg-lwhite px-5 py-3 border-2 border-lorange rounded-md ">
            <span className="text-lorange">Create project</span>
          </button>
          <button className="bg-lwhite px-5 py-3 border-2 border-lorange rounded-md ">
            <span className="text-lorange">Create project</span>
          </button>
        </div>
        <div className="flex-col flex mx-10">
          <button className="bg-lwhite px-5 py-3 border-2 border-lorange rounded-md my-8">
            <span className="text-lorange">Create project</span>
          </button>
          <button className="bg-lwhite px-5 py-3 border-2 border-lorange rounded-md">
            <span className="text-lorange">Create project</span>
          </button>
        </div>
      </div>
    </div>
  );
}
