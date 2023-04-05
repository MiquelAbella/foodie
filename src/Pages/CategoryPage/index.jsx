import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { getRecipesByCuisine } from "../../API/recipes";
import { RecipeCard } from "../../Components/Cards/RecipeCard";
import { categorySkeletonData, categoryData as data } from "../../data";
import { cuisines } from "../../data";
import { useMenu } from "../../Context/MenuContext/MenuContext";
import { useState } from "react";
import { MdOutlineRestaurant } from "react-icons/md";
import { CategoryRecipeCard } from "../../Components/Cards/CategoryRecipeCard";
import { Parallax } from "react-scroll-parallax";
import { RiArrowGoBackFill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";
import { ScrollTop } from "../../Components/ScrollTop";
import { useRouting } from "../../Context/RoutingContext/RoutingContext";
import { CategoryRecipeCardSkeleton } from "../../Components/Cards/CategoryRecipeCard/CategoryRecipeCardSkeleton";

export const CategoryPage = () => {
  const { category } = useParams();

  const filtered = cuisines.filter((cuisine) => {
    return cuisine.type.toLowerCase() === category;
  })[0];
  //   const { data, isLoading, error } = useQuery({
  //     queryKey: [category],
  //     queryFn: async () => await getRecipesByCuisine(category),
  //   });
  //   console.log(JSON.stringify(data));
  const isLoading = false;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-cyan-600 w-full mb-12">
        <h1
          className="text-[15vw] w-full text-center font-extrabold text-transparent  bg-contain bg-clip-text"
          style={{ backgroundImage: `url(${filtered.img})` }}
        >
          {category.toUpperCase()}
        </h1>
        <p className="text-white w-full pr-20 pb-4 text-end text-4xl">
          RECIPES
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center w-4/5 min-h-screen">
        {isLoading ? (
          categorySkeletonData.map((el) => <CategoryRecipeCardSkeleton />)
        ) : data ? (
          data.map((recipe, idx) => {
            return <CategoryRecipeCard recipe={recipe} category={category} />;
          })
        ) : (
          <p className="absolute top-[50vh] text-2xl bg-red-500 text-white p-6 w-3/5 text-center rounded-md">
            Ooops... Something happened...
          </p>
        )}
      </div>
      <HashLink to="/#cuisine-selector">
        <div className="h-8 w-8 rounded-full bg-white fixed top-2 left-2 z-50 flex items-center justify-center">
          <RiArrowGoBackFill className="text-gray-500 text-xl" />
        </div>
      </HashLink>
      <ScrollTop />
    </div>
  );
};
