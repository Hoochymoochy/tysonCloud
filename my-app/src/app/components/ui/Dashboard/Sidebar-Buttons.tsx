import Image from "next/image";

interface button{
    image: string,
    text: string,
    size: number,
    onClick?: ()=> void
    
}


export const SidebarButton: React.FC<button> = ({image, text, size}) => {
  return (
    <button className="hover:bg-slate-200 hover:bg-opacity-95  border-1 rounded-md w-full py-2 my-1 ml-2 ease-in-out duration-300 flex text-xl">
      <Image
        src={`/images/${image}.png`}
        alt="Close Sidebar"
        width={size}
        height={size}
        className="justify-center mr-4"
      />
      {text}
    </button>
  );
}
