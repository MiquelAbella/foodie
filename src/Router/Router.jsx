import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Main } from "../Pages/Main";
import { Menu } from "../Pages/Menu";
import { RecipeDetails } from "../Pages/RecipeDetails";

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/recipe">
        <Route path=":id" element={<RecipeDetails />} />
      </Route>
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};
