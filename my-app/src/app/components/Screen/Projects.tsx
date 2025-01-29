"use client";
import Image from "next/image";
import { useState } from "react";
import { SidebarButton } from "../ui/Dashboard/Sidebar-Buttons";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e: any) => {
    const uploadedFile = e.target.files[0];
    console.log(uploadedFile.type)

    if (uploadedFile && uploadedFile.type === "application/x-zip-compressed") {
      setFile(uploadedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please upload a valid ZIP file.");
    }
  };

  const handleUpload = () => {
    if (file) {
      //AKA this bullshit
      // Handle the file upload logic
      const formData = new FormData();
      formData.append("file", file);

      // Example: You can send formData to the server here using fetch or Axios
      console.log("Uploading file:");

      alert("File uploaded successfully!");
    }
  };

  return (
    <div className="bg-lslate flex min-h-screen relative">
      {/* Top Bar */}
      <div className="bg-black text-white fixed top-0 left-0 w-full h-20 flex items-center px-4 z-10"></div>

      {/* Sidebar */}
      <div className="w-80 bg-lwhite shadow-lg fixed left-0 top-20 h-full border-l border-gray-200 transition-all duration-300 overflow-hidden z-20 text-lorange">
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
        <div className="bg-gray-300 h-20 justify-center items-center flex rounded-lg mt-10 mb-8">
          <button className="text-lorange border bg-white border-gray-500 rounded px-10 py-2 mx-10 text-4xl">
            Create Project
          </button>
          <button className="text-lorange border bg-white border-gray-500 rounded px-10 py-2 mx-10 text-4xl">
            Edit Project
          </button>
        </div>
        <div className="mt-4 bg-slate-300 min-h-screen p-10 flex flex-row py-10 space-x-10">
          <div className="w-1/3 p-4">
            <div className="text-4xl text-lorange text-center">
              Create New Project
            </div>
            <div className="bg-lwhite min-h-screen p-5">
              <div className="mt-9">
                <label className="text-lorange text-4xl mb-5 pl-5 block">
                  Project Name
                </label>
                <input
                  className="h-20 text-2xl rounded-lg pl-10 w-full"
                  placeholder="Please Enter Project Name"
                />
              </div>
              <div className="mt-9">
                <label className="text-lorange text-4xl mb-5 pl-5 block">
                  Project Description
                </label>
                <textarea
                  className="h-44 text-2xl rounded-lg pl-10 w-full"
                  placeholder="Please Enter Project Description"
                ></textarea>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-center mb-5">
                  Upload ZIP File
                </h2>

                <div className="flex flex-col items-center">
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mb-3"
                  >
                    Choose File
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {file && (
                    <p className="text-green-500 font-medium">
                      Selected file: {}
                    </p>
                  )}
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>

                <button
                  onClick={handleUpload}
                  className={`mt-5 w-full py-2 px-4 rounded-lg text-white ${
                    file
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!file}
                >
                  Upload File
                </button>
              </div>
            </div>
          </div>

          <div className="bg-lwhite w-1/5 min-h-screen p-4">
            <div className="text-lorange text-3xl text-center">File Tree</div>
          </div>

          <div className="bg-slate-300 w-1/3 min-h-screen flex justify-center items-center flex-col">
            <div className="text-4xl text-lorange mb-2">Code Editor</div>
            <div className="bg-lwhite min-h-screen w-full p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
