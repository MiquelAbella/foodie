import React from "react";

export const Header = ({ data }) => {
  return (
    <div className="w-full h-[80vh] relative">
      <img
        className="w-full h-full object-cover blur-md brightness-50 top-0"
        src={data.image}
      />
      <div className="z-10 w-full absolute top-0 right-0 left-0 bottom-0 m-auto flex flex-col items-center justify-center gap-12">
        <img
          className="w-2/3 md:w-2/5 max-h-[40vh] object-cover rounded-md"
          src={data.image}
        />
        <p className="text-2xl md:text-4xl lg:text-6xl text-gray-200  max-w-[80vw] text-center">
          {data.title}
        </p>
      </div>
    </div>
  );
};
