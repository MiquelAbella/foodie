import React from "react";
import { useMenu } from "../../Context/MenuContext/MenuContext";

export const Menu = () => {
  const { menu } = useMenu();
  console.log(menu)
  return (
    <div>
      {menu.map((recipe) => {
        return <p>{recipe.title}</p>;
      })}
    </div>
  );
};
