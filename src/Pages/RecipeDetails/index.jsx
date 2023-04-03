import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { useMenu } from "../../Context/MenuContext/MenuContext";
// import { data } from "../../data";

const API_KEY = import.meta.env.VITE_API_KEY;

export const RecipeDetails = () => {
 
    let { id } = useParams();
    const { isLoading, error, data } = useQuery({
      queryKey: ["repoData"],
      queryFn: () =>
        fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        ).then((res) => res.json()),
    });
    console.log(JSON.stringify(data));
  return (
    <div className="w-full h-[60vh] relative">
      <img
        className="w-full h-full object-cover blur-sm brightness-50 top-0"
        src={!isLoading && data.image}
      />
      <div className="z-10 w-full absolute top-0 right-0 left-0 bottom-0 m-auto flex flex-col items-center justify-center gap-12">
        <img
          className="w-2/3 md:w-2/5 max-h-[40vh] object-cover rounded-md"
          src={!isLoading && data.image}
        />
        <p className="text-2xl md:text-4xl lg:text-6xl text-gray-200 truncate max-w-4/5 text-center">
          {!isLoading && data.title}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="my-20 p-6 grid grid-cols-6 justify-start px-20 gap-6 w-4/5 border-2 border-gray-300 shadow-md rounded-md">
          {!isLoading && data.extendedIngredients.map((ingredient) => {
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
      <div className="pb-20 flex justify-center items-center">
        <div className="grid grid-cols-3 place-items-center w-4/5">
          {!isLoading && data.extendedIngredients.map((ingredient) => {
            return (
              <div className="flex w-full items-start justify-center gap-4">
                <p className="text-gray-600 font-bold">
                  {ingredient.name.toUpperCase()}
                </p>
                <p className="text-gray-600 underline">
                  {Math.round(ingredient.measures.metric.amount)}
                  {ingredient.measures.metric.unitShort}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
