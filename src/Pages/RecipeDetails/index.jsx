import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { useMenu } from "../../Context/MenuContext/MenuContext";
import { individualRecipe as data } from "../../data";
import { Header } from "../../Components/Pages/RecipeDetails/Header";
import { Ingredients } from "../../Components/Pages/RecipeDetails/Ingredients";
import { Steps } from "../../Components/Pages/RecipeDetails/Steps";
import { Recommendation } from "../../Components/Pages/RecipeDetails/Recommendation";
import { RiArrowGoBackFill } from "react-icons/ri";

const API_KEY = import.meta.env.VITE_API_KEY;

export const RecipeDetails = () => {
  let { id } = useParams();
  //   const { isLoading, error, data } = useQuery({
  //     queryKey: ["repoData"],
  //     queryFn: () =>
  //       fetch(
  //         `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  //       ).then((res) => res.json()),
  //   });
  //   console.log(data);
  return (
    <>
      <NavLink to="/">
        <div className="h-8 w-8 rounded-full bg-white absolute top-2 left-2 z-50 flex items-center justify-center">
          <RiArrowGoBackFill className="text-gray-500 text-xl" />
        </div>
      </NavLink>
      {/* {!isLoading && !error && ( */}
      <>
        <Header data={data} />
        <Ingredients data={data} />
        <Steps data={data} />
        <Recommendation data={data} />
      </>
      {/* )} */}
    </>
  );
};
