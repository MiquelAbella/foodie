import { useState } from "react";
import { useMenu } from "../../../Context/MenuContext/MenuContext";
import { IoRestaurantOutline, IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRestaurant } from "react-icons/md";

import { BiTime } from "react-icons/bi";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const { addToMenu, menu } = useMenu();
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
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div
        className="rounded-md relative cursor-pointer flex flex-col justify-between gap-6 border-b border-gray-400 duration-300 hover:bg-gray-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleNavigate}
      >
        <div
          onClick={handleAddToMenu}
          className={`absolute right-2 top-2 p-2 bg-gray-500 rounded-full hover:scale-95 ${
            !isHovered && "hidden"
          }`}
        >
          <MdOutlineRestaurant className="text-lg text-white" />
        </div>
        <img
          className="rounded-md w-full object-cover "
          src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`}
          alt=""
        />

        <p
          className={`text-gray-900 text-sm md:text-2xl p-2 cursor-pointer truncate`}
        >
          {recipe.title}
        </p>
        <div className="flex items-end justify-between md:px-6 pb-4">
          <div className="flex gap-2 items-center">
            <IoPeopleOutline />
            <p>{recipe.servings}</p>
          </div>
          <div className="flex gap-2 items-center">
            <BiTime />
            <p>{recipe.readyInMinutes} '</p>
          </div>
        </div>
      </div>
    </>
  );
};
