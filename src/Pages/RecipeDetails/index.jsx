import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { useMenu } from "../../Context/MenuContext/MenuContext";
import { individualRecipe as data } from "../../data";
import { Header } from "../../Components/Pages/RecipeDetails/Header";
import { Ingredients } from "../../Components/Pages/RecipeDetails/Ingredients";
import { Steps } from "../../Components/Pages/RecipeDetails/Steps";
import { Recommendation } from "../../Components/Pages/RecipeDetails/Recommendation";
import { RiArrowGoBackFill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";
import { useRouting } from "../../Context/RoutingContext/RoutingContext";
import { ScrollTop } from "../../Components/ScrollTop";

const API_KEY = import.meta.env.VITE_API_KEY;

export const RecipeDetails = () => {
  let { id } = useParams();
  const { prevRoute } = useRouting();
  const isLoading = false;
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
      <HashLink to={prevRoute}>
        <div className="h-8 w-8 rounded-full bg-white fixed top-2 left-2 z-50 flex items-center justify-center">
          <RiArrowGoBackFill className="text-gray-500 text-xl" />
        </div>
      </HashLink>
      {!isLoading && (
        <>
          <Header data={data} />
          <Ingredients data={data} />
          <Steps data={data} />
          <Recommendation data={data} />
        </>
      )}
      <ScrollTop />
    </>
  );
};
