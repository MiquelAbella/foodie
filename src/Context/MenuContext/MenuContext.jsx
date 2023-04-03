import { createContext, useContext, useReducer } from "react";
import { menuTypes } from "../Types/menuTypes";
import menuReducer from "./MenuReducer";

const MenuContext = createContext();

export const useMenu = () => {
  const state = useContext(MenuContext);
  return state;
};

const init = { menu: [] };

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, init);

  const addToMenu = (dish) => {
    return dispatch({ type: menuTypes.add, payload: dish });
  };

  return (
    <MenuContext.Provider
      value={{
        ...state,
        addToMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
