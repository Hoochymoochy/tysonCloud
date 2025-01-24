"use client";
import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  const [side, setSide] = useState(false);

  const toggleSidebar = () => {
    setSide(!side);
  };

  return (
    <div className="bg-lslate flex min-h-screen relative">
      {/* Top Bar */}
      <div className="bg-black text-white fixed top-0 left-0 w-full h-20 flex items-center px-4 z-10">
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
          side ? "w-0 border-0" : "w-80"
        } bg-white shadow-lg fixed left-0 top-20 h-full border-l border-gray-200 transition-all duration-300 overflow-hidden z-20 text-lorange`}
      >
        <button
          className="absolute right-4 top-4 flex items-center"
          onClick={toggleSidebar}
        >
          <Image
            src="/images/back-arrow.png"
            alt="Close Sidebar"
            width={40}
            height={40}
            className="justify-center"
          />
        </button>

        {!side && (
          <>
            <h2 className="text-lg font-semibold p-4 border-b border-gray-300 mb-1">
              <Image
                src="/images/user.png"
                alt="Close Sidebar"
                width={40}
                height={40}
                className="mb-2"
              />
              TysonCloud@gmail.com
            </h2>
            <div>
              <button className="hover:bg-lslate hover:bg-opacity-80  border-1 rounded-md pr-44 pl-10 py-2 my-1 ml-2 ease-in-out duration-300 flex text-xl">
                <Image
                  src="/images/home.png"
                  alt="Close Sidebar"
                  width={25}
                  height={25}
                  className="justify-center mr-4"
                />
                Dashboard
              </button>
              <button className="hover:bg-lslate hover:bg-opacity-80  border-1 rounded-md pr-44 pl-10 py-2 my-1 ml-2 ease-in-out duration-300 flex text-xl">
                <Image
                  src="/images/data-copy.png"
                  alt="Close Sidebar"
                  width={30}
                  height={30}
                  className="justify-center mr-4"
                />
                Projects
              </button>
              <button className="hover:bg-lslate hover:bg-opacity-80  border-1 rounded-md pr-44 pl-10 py-2 my-1 ml-2 ease-in-out duration-300 flex text-xl">
                <Image
                  src="/images/release.png"
                  alt="Close Sidebar"
                  width={30}
                  height={30}
                  className="justify-center mr-4"
                />
                Development
              </button>
              <button className="hover:bg-lslate hover:bg-opacity-80  border-1 rounded-md pr-44 pl-10 py-2 my-1 ml-2 ease-in-out duration-300 flex text-xl">
                <Image
                  src="/images/gear.png"
                  alt="Close Sidebar"
                  width={30}
                  height={30}
                  className="justify-center mr-4"
                />
                Settings
              </button>
            </div>
            <div>
              <div className="p-4">
                <p>Actions</p>
              </div>
              <button className="hover:bg-lslate hover:bg-opacity-80  border-1 rounded-md pr-30 pl-10 py-2 my-1 ml-2 ease-in-out duration-300 flex text-xl">
                <Image
                  src="/images/plus.png"
                  alt="Close Sidebar"
                  width={30}
                  height={30}
                  className="justify-center mr-4"
                />
                Add Profile
              </button>
              <button className="hover:bg-lslate hover:bg-opacity-80  border-1 rounded-md pr-44 pl-10 py-2 my-1 ml-2 ease-in-out duration-300 flex text-xl">
                <Image
                  src="/images/logout.png"
                  alt="Close Sidebar"
                  width={25}
                  height={25}
                  className="justify-center mr-4"
                />
                Projects
              </button>
            </div>
          </>
        )}
      </div>

      {/* User Area */}
      <div
        className="bg-lslate flex flex-col items-center w-full pt-28 px-4 overflow-x-hidden relative"
        style={{ marginLeft: side ? "0" : "80px" }}
      >
        {/* Top Buttons */}
        <div className="flex flex-wrap justify-center gap-10 mb-8">
          <button className="bg-lwhite px-5 py-3 border-2 border-lorange rounded-md">
            <span className="text-lorange">Create Project</span>
          </button>
          <button className="bg-lwhite px-5 py-3 border-2 border-lorange rounded-md">
            <span className="text-lorange">View Projects</span>
          </button>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col items-center gap-4">
          <button className="bg-lwhite px-5 py-3 border-2 border-lorange rounded-md">
            <span className="text-lorange">Project 1</span>
          </button>
          <button className="bg-lwhite px-5 py-3 border-2 border-lorange rounded-md">
            <span className="text-lorange">Project 2</span>
          </button>
        </div>
      </div>
    </div>
  );
}
