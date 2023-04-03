import React from "react";

export const Ingredients = ({ data }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-20 p-4 md:p-0">
      <button className="mb-12 duration-300 px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-white hover:text-gray-600 border hover:border-gray-600 ">
        Add to menu
      </button>
      <div className="w-full p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-start md:px-20 gap-6 md:w-4/5 border border-slate-400 shadow-md rounded-md">
        {data.extendedIngredients.map((ingredient) => {
          return (
            <div className=" flex flex-col items-center justify-between">
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
