import React from "react";
import {
  Header,
  CuisineSelector,
  RandomRecipe,
  SearchSection,
} from "../../Components/Pages/Main";

export const Main = () => {
  return (
    <div>
      <Header />
      <CuisineSelector />
      <RandomRecipe />
      <SearchSection />
    </div>
  );
};
