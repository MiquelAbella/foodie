import { useMenu } from "../../Context/MenuContext/MenuContext";
import { MenuCard } from "../../Components/Cards/MenuCard";
import { NavLink } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";

const headerImage = import.meta.env.BASE_URL + "menuImg2.jpg";

export const Menu = () => {
  const { menu } = useMenu();

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1
        className="text-[10vw] w-full text-center font-extrabold text-transparent bg-clip-text bg-cover pt-20"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        YOUR RECIPES
      </h1>
      <p className="text-base md:text-3xl text-gray-500 pb-12">
        Time to make something delicious !
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center w-full xl:w-4/5">
        {menu.map((recipe, idx) => {
          return <MenuCard key={recipe.title} recipe={recipe} />;
        })}
      </div>
      <NavLink to="/">
        <div className="h-8 w-8 rounded-full bg-white fixed top-2 left-2 z-50 flex items-center justify-center">
          <RiHome2Fill className="text-gray-500 text-2xl" />
        </div>
      </NavLink>
    </div>
  );
};
