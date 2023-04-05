import { NavLink } from "react-router-dom";
import { CuisineCard } from "../../../Cards/CuisineCard";
import { cuisines } from "../../../../data";
import { useRouting } from "../../../../Context/RoutingContext/RoutingContext";

export const CuisineSelector = () => {
  const { setPrevRoute } = useRouting();
  const handleSetPrevRoute = () => {
    setPrevRoute("/#cuisine-selector");
  };
  return (
    <div className="p-6 md:p-12 mt-12">
      <p className="md:px-20 mb-6 text-gray-500 text-2xl md:text-4xl">
        Tastes of the world
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center xl:px-16 xl:gap-12 gap-6 ">
        {cuisines.map((category, idx) => {
          return (
            <NavLink
              key={category.type}
              onClick={handleSetPrevRoute}
              to={`/category/${category.type.toLowerCase()}`}
              className="w-full"
            >
              <CuisineCard id={idx} category={category} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
