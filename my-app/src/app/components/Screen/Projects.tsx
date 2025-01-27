"use client";
import Image from "next/image";
import { useState } from "react";
import { SidebarButton } from "../ui/Dashboard/Sidebar-Buttons";

export default function Dashboard() {
  return (
    <div className="bg-lslate flex min-h-screen relative">
      {/* Top Bar */}
      <div className="bg-black text-white fixed top-0 left-0 w-full h-20 flex items-center px-4 z-10"></div>

      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg fixed left-0 top-20 h-full border-l border-gray-200 transition-all duration-300 overflow-hidden z-20 text-lorange">
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
          <div className="w-[90%] mx-auto mt-4">
            <SidebarButton
              text="Dashboard"
              image="home"
              size={25}
            ></SidebarButton>
            <SidebarButton
              text="Projects"
              image="data-copy"
              size={30}
            ></SidebarButton>
            <SidebarButton
              text="Development"
              image="release"
              size={30}
            ></SidebarButton>
            <SidebarButton
              text="Settings"
              image="gear"
              size={30}
            ></SidebarButton>
          </div>
          <div className="bottom-32 absolute w-[90%] mx-auto mt-4">
            <div className="p-4">
              <p>Actions</p>
            </div>
            <SidebarButton
              text="Add Profile"
              image="plus"
              size={25}
            ></SidebarButton>
            <SidebarButton
              text="Log Out"
              image="logout"
              size={25}
            ></SidebarButton>
          </div>
        </>
        \
      </div>

      {/* User Area */}
      <div className="bg-lslate flex w-full pl-96 pt-28 pr-4 overflow-x-hidden relative flex-col">
        <div className="text-7xl">Development</div>
        <div className="bg-gray-300 h-20 justify-center items-center flex rounded-lg mt-10">
          <button className="text-lorange border bg-white border-gray-500 rounded px-4 py-2 mx-2">
            Create Project
          </button>
          <button className="text-lorange border bg-white border-gray-500 rounded px-4 py-2 mx-2">
            Edit Project
          </button>
        </div>
        <div className="mt-4 bg-slate-300 min-h-screen p-10 flex flex-row py-10">
          <div className="w-1/3 p-4">
            <span className="text-4xl text-lorange">Create New Project</span>
            <div className="mt-9 flex-col flex">
              <span className="text-lorange text-2xl mb-5">Project Name</span>
              <div>

              </div>
              <input
                className="h-14 rounded-lg pl-10"
                placeholder="Please Enter Project Name"
              ></input>
            </div>
            <div className="mt-9 flex-col flex">
              <span className="text-lorange text-2xl mb-5">
                Project Description
              </span>
              <input
                className="h-44 rounded-lg pl-10 items-start"
                placeholder="Please Enter Project Description"
              ></input>
              <div className="bg-white h-32 w-32 mt-3 justify-center items-center flex">
                input
              </div>
            </div>
          </div>

          <div className="bg-lslate w-1/4 min-h-screen mx-10 p-4">
            <span className="text-lorange flex justify-center items-center text-3xl">File Tree</span>
          </div>

          <div className="bg-slate-300 w-1/3 min-h-screen p-4 flex justify-center items-center relative">
            <span className="absolute top-0 text-4xl text-lorange">Code Editor</span>
            <div className="bg-lslate min-h-screen w-full absolute top-12 p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
