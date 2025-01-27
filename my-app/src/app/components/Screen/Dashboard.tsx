"use client";
import Image from "next/image";
import { useState } from "react";
import { SidebarButton } from "../ui/Dashboard/Sidebar-Buttons";

export default function Dashboard() {
  return (
    <div className="bg-lslate flex min-h-screen relative">
      {/* Top Bar */}
      <div className="bg-black text-white fixed top-0 left-0 w-full h-20 flex items-center px-4 z-10">
      </div>

      {/* Sidebar */}
      <div
        className="w-80 bg-white shadow-lg fixed left-0 top-20 h-full border-l border-gray-200 transition-all duration-300 overflow-hidden z-20 text-lorange"
      >

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
              <SidebarButton text="Dashboard" image="home" size={25}></SidebarButton>
              <SidebarButton text="Projects" image="data-copy" size={30}></SidebarButton>
              <SidebarButton text="Development" image="release" size={30}></SidebarButton>
              <SidebarButton text="Settings" image="gear" size={30}></SidebarButton>
            </div>
            <div className="bottom-32 absolute w-[90%] mx-auto mt-4">
              <div className="p-4">
                <p>Actions</p>
              </div>
              <SidebarButton text="Add Profile" image="plus" size={25}></SidebarButton>
              <SidebarButton text="Log Out" image="logout" size={25}></SidebarButton>
            </div>
          </>
\
      </div>

      {/* User Area */}
      <div
        className="bg-lslate flex flex-col items-center w-full pt-28 px-4 overflow-x-hidden relative"
      >
      </div>
    </div>
  );
}
