import { useState } from "react";
import { useMenu } from "../../../Context/MenuContext/MenuContext";
import { IoRestaurantOutline, IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRestaurant } from "react-icons/md";

import { BiTime } from "react-icons/bi";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const RecipeCardSkeleton = ({ recipe }) => {
  return (
    <div className="rounded-md relative cursor-pointer flex flex-col justify-between gap-6 border-b border-gray-400 duration-500 bg-gray-200 animate-pulse h-96">
      <div className="rounded-md w-full object-cover " />

      <p
        className={`text-gray-900 text-sm md:text-2xl p-2 cursor-pointer truncate text-center`}
      >
        ...
      </p>
    </div>
  );
};
