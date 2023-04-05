import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../../../Context/MenuContext/MenuContext";
import { MdOutlineRestaurant } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";
import { useRouting } from "../../../Context/RoutingContext/RoutingContext";

export const CategoryRecipeCard = ({ recipe, category }) => {
  const navigate = useNavigate();
  const { addToMenu, menu } = useMenu();
  const { setPrevRoute } = useRouting();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToMenu = (e) => {
    e.stopPropagation();
    if (menu.includes(recipe)) {
      toast.error("Already in your menu");
    } else {
      toast.success("Added to menu");
      addToMenu(recipe);
    }
  };

  const handleNavigate = () => {
    navigate(`/recipe/${recipe.id}`);
    setPrevRoute(`/category/${category}`);
  };
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigate}
      className="relative cursor-pointer flex flex-col justify-between gap-6 border-b pb-4 border-gray-400 duration-300 hover:bg-gray-200 h-full w-full"
    >
      <img className="h-5/6  object-cover" src={recipe.image} />
      <p className="truncate w-5/6 text-gray-500">{recipe.title}</p>
      <div
        className={`absolute right-2 top-2 p-2 bg-gray-500 rounded-full hover:scale-95 ${
          !isHovered && "hidden"
        }`}
      >
        <MdOutlineRestaurant
          className="text-lg text-white"
          onClick={handleAddToMenu}
        />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};
