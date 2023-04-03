import { MdOutlineRestaurant } from "react-icons/md";
import { Link } from "react-router-dom";
import { useMenu } from "../Context/MenuContext/MenuContext";

export const Layout = ({ children }) => {
  const { menu } = useMenu();

  return (
    <div>
      <div className="fixed top-2 right-2 h-16 w-16 flex items-center justify-center gap-2 bg-gray-500 z-50 rounded-full">
        <Link to="menu">
          <MdOutlineRestaurant className="text-xl text-white" />
        </Link>
        <p className="text-white">{menu.length} </p>
      </div>
      {children}
    </div>
  );
};
