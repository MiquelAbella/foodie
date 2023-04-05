import React from "react";
import {
  Header,
  CuisineSelector,
  RandomRecipe,
  SearchSection,
} from "../../Components/Pages/Main";
import { Footer } from "../../Components/Footer";

export const Main = () => {
  return (
    <div>
      <Header />
      <div id="cuisine-selector">
        <CuisineSelector />
      </div>
      <div id="random">
        <RandomRecipe />
      </div>
      <div id="search">
        <SearchSection />
      </div>
      <Footer />
    </div>
  );
};
