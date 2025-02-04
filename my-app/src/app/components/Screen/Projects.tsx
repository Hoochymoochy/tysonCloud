"use client";
import Image from "next/image";
import { useState } from "react";
import { SidebarButton } from "../ui/Dashboard/Sidebar-Buttons";
import JSZip from "jszip";
import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

interface FileTreeNode {
  name: string;
  isFolder: boolean;
  children?: FileTreeNode[];
}

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const [fileTree, setFileTree] = useState<FileTreeNode[]>([]);
  const [code, setCode] = useState("// Start coding...");
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set()
  );

  const handleFileChange = (e: any) => {
    const uploadedFile = e.target.files[0];
    console.log(uploadedFile.type);

    if (uploadedFile && uploadedFile.type === "application/x-zip-compressed") {
      setFile(uploadedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please upload a valid ZIP file.");
    }
  };

  const handleUpload = async () => {
    if (file) {
      const zip = new JSZip();

      const contents = await zip.loadAsync(file);
      console.log(contents)
      const newFileTree = buildFileTree(contents.files);
      setFileTree(newFileTree);
      setCheck(true);
    }
  };

  // Build the tree structure from the extracted files
  const buildFileTree = (
    files: Record<string, JSZip.JSZipObject>
  ): FileTreeNode[] => {
    const tree: FileTreeNode[] = [];

    Object.keys(files).forEach((filename) => {
      const pathParts = filename.split("/");
      let currentNode = tree;

      pathParts.forEach((part, idx) => {
        const isLast = idx === pathParts.length - 1;
        const existingNode = currentNode.find((node) => node.name === part);

        if (existingNode) {
          currentNode = existingNode.children || [];
        } else {
          const newNode: FileTreeNode = {
            name: part,
            isFolder: !isLast,
            children: isLast ? undefined : [],
          };
          currentNode.push(newNode);
          currentNode = newNode.children || [];
        }
      });
    });

    return tree;
  };

  // Toggle the expanded state of a folder
  const toggleFolder = (folderName: string) => {
    const newExpandedFolders = new Set(expandedFolders);
    if (expandedFolders.has(folderName)) {
      newExpandedFolders.delete(folderName);
    } else {
      newExpandedFolders.add(folderName);
    }
    setExpandedFolders(newExpandedFolders);
  };

  // Render file tree recursively
  const handleFileClick = async (filePath: string) => {
    if (!file || !filePath) return;
  
    const zip = new JSZip();
    const contents = await zip.loadAsync(file);
    const fileData = contents.files[filePath];
  
    if (fileData && !fileData.dir) {
      const content = await fileData.async("text");
      setCode(content);
    }
  };
  
  // Modify renderTree function to handle file clicks
  const renderTree = (nodes: FileTreeNode[], parentPath = "") => {
    return (
      <ul>
        {nodes.map((node, idx) => {
          const currentPath = `${parentPath}/${node.name}`;
          return (
            <li key={idx}>
              {node.isFolder ? (
                <span onClick={() => toggleFolder(currentPath)}>
                  {expandedFolders.has(currentPath) ? "[-]" : "[+]"} {node.name}
                </span>
              ) : (
                <span className="cursor-pointer text-blue-500" onClick={() => handleFileClick(currentPath)}>
                  {node.name}
                </span>
              )}
              {node.isFolder &&
                expandedFolders.has(currentPath) &&
                node.children && (
                  <div style={{ marginLeft: "20px" }}>
                    {renderTree(node.children, currentPath)}
                  </div>
                )}
            </li>
          );
        })}
      </ul>
    );
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
            {check && (
              <ul>
                <ul>
                  {fileTree.length > 0 && (
                    <div>
                      <h1 className="text-4xl border-1">
                        {renderTree(fileTree)}
                      </h1>
                    </div>
                  )}
                </ul>
              </ul>
            )}
          </div>

          <div className="bg-slate-300 w-1/3 min-h-screen flex flex-col">
            <div className="text-4xl text-lorange p-4">Code Editor</div>
            <div className="bg-lwhite flex-grow p-4 flex">
              <CodeMirror
                className="h-full w-full flex-grow"
                value={code}
                extensions={[javascript(), EditorView.lineWrapping]}
                onChange={(value) => setCode(value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
