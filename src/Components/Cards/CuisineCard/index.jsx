import { useState } from "react";

export const CuisineCard = ({ category, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { type, img } = category;

  return (
    <div
      className="relative border shadow-md h-80 w-full flex flex-col items-center justify-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} className="h-full w-full object-cover" />
      <div
        className={`absolute bottom-0 bg-white/60 ${
          isHovered ? "h-full" : "h-1/6"
        } w-full flex items-center justify-center duration-300`}
      >
        <button
          className={`text-3xl px-4 py-2  text-slate-800 cursor-pointer hover:text-slate-600 ${isHovered && "border-y border-slate-800"}   text-center`}
        >
          {!isHovered ? type.toUpperCase() : "VIEW"}
        </button>
      </div>
    </div>
  );
};
