import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import { useMenu } from "../../../Context/MenuContext/MenuContext";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const MenuCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { deleteFromMenu } = useMenu();

  const { imageType, image, id, title } = recipe;

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteFromMenu(recipe);
    toast.success("Successfuly deleted");
  };

  const handleNavigate = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div
      className="w-72 h-72 flex flex-col items-center justify-start gap-2 relative cursor-pointer border border-gray-300 hover:bg-gray-300 duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigate}
    >
      <Toaster position="bottom-right" reverseOrder={false} />
      <img alt=""
        className="w-full h-4/5 object-cover"
        src={
          imageType
            ? image
            : `https://spoonacular.com/recipeImages/${id}-636x393.jpg`
        }
      />
      <p className="text-gray-600">{title}</p>
      {isHovered && (
        <div
          className="absolute top-2 right-2 bg-red-500 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
          onClick={handleDelete}
        >
          <MdOutlineDelete className="text-lg text-white" />
        </div>
      )}
    </div>
  );
};
