import { useMenu } from "../../../../Context/MenuContext/MenuContext";
import { Toaster, toast } from "react-hot-toast";

export const Ingredients = ({ data }) => {
  const { addToMenu, menu } = useMenu();

  const handleAddToMenu = (e) => {
    e.stopPropagation();
    if (menu.includes(data)) {
      toast.error("Already in your menu");
    } else {
      toast.success("Added to menu");
      addToMenu(data);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center my-20 p-4 md:p-0">
      <Toaster position="bottom-right" reverseOrder={false} />
      <button
        onClick={handleAddToMenu}
        className="mb-12 duration-300 px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-white hover:text-gray-600 border hover:border-gray-600 "
      >
        Add to menu
      </button>
      <div className="w-full p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-start md:px-20 gap-6 md:w-4/5 border border-slate-400 shadow-md rounded-md">
        {data.extendedIngredients.map((ingredient, idx) => {
          return (
            <div key={idx} className=" flex flex-col items-center justify-between">
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                className="h-2/3 object-scale-down"
              />
              <p className="text-gray-600">{ingredient.name.toUpperCase()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
