import { useState } from "react";
import bg from "../../../../assets/RandomRecipeBg.jpg";
import searchText from "../../../../assets/searchText.png";
import { searchRecipe as data } from "../../../../data";
import { RecipeCard } from "../../../Cards/RecipeCard";

const API_KEY = import.meta.env.VITE_API_KEY;

export const RandomRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  const getRandomRecipe = async () => {
    // const res = await fetch(
    //   `https://api.spoonacular.com/recipes/random?number=1&apiKey=${API_KEY}`
    // );
    // const data = await res.json();
    setRecipe(data);
    // console.log(JSON.stringify(data));
  };
  return (
    <div
      className="min-h-[60vh] p-12 flex flex-col items-center justify-around bg-cover  my-20 relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center">
        {recipe ? (
          <div className="w-80 md:w-96 h-3/5 bg-white/50  p-6">
            <div className="bg-white rounded-md">
              <RecipeCard recipe={recipe.recipes[0]} />
            </div>
          </div>
        ) : (
          <img
            className="w-80 md:w-96 h-80 md:h-96 object-contain"
            src={searchText}
          />
        )}
      </div>

      <button
        onClick={getRandomRecipe}
        className="py-4 px-4 md:px-24 mr-4 text-lg sm:text-xl mt-4 md:mt-0 text-white mb-4 rounded-full  bg-[#008F49]"
      >
        RANDOM RECIPE !
      </button>
    </div>
  );
};
