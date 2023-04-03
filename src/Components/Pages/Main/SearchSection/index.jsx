import { appleCakes } from "../../../../data";
import { RecipeCard } from "../../../Cards/RecipeCard";
import { BiSearchAlt, BiSortDown, BiSortUp } from "react-icons/bi";
import { useState } from "react";
import { handleSearch } from "../../../../API/recipes";

export const SearchSection = () => {
  const [recipeQuery, setRecipeQuery] = useState("");
  const [recipes, setRecipes] = useState(appleCakes);
  const [isAscending, setIsAscending] = useState(true);

  const sortByParams = (e) => {
    const param = e.target.value;
    const newArr = [...recipes];
    const sortedRecipes = newArr.sort((a, b) => {
      return a[param] - b[param];
    });
    setRecipes(sortedRecipes);
  };

  const toggleAscDesc = () => {
    const newArr = [...recipes];
    const reversed = newArr.reverse();
    setRecipes(reversed);
    setIsAscending(!isAscending);
  };

  const handleInputChange = (e) => {
    setRecipeQuery(e.target.value);
  };

  const handleSubmitSearch = async () => {
    const recipes = await handleSearch(recipeQuery);
    setRecipes(recipes);
  };

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex items-center text-gray-500 border-b border-gray-500 text-3xl">
        <input
          id="search-input"
          className="px-4 py-2 w-[80vw] md:w-[40vw] outline-none"
          placeholder="Strawberry cake"
          value={recipeQuery}
          onChange={handleInputChange}
        />
        <BiSearchAlt onClick={handleSubmitSearch} />
      </div>
      <div className="pt-4 flex items-center gap-6">
        <label className="text-gray-500">Sort by :</label>
        <select
          className="p-2 outline-none text-gray-500"
          onChange={sortByParams}
        >
          <option value="servings">Servings num</option>
          <option value="readyInMinutes">Cooking time</option>
        </select>
        {isAscending ? (
          <BiSortDown
            className="text-2xl text-gray-500 cursor-pointer"
            onClick={toggleAscDesc}
          />
        ) : (
          <BiSortUp
            className="text-2xl text-gray-500 cursor-pointer"
            onClick={toggleAscDesc}
          />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-6 md:p-12 lg:p-20">
        {recipes.length ? (
          recipes.map((recipe, idx) => {
            return <RecipeCard key={idx} recipe={recipe} />;
          })
        ) : (
          <p>No recipes match this search</p>
        )}
      </div>
    </div>
  );
};
