import { createContext, useContext, useMemo, useReducer } from "react";
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

  const deleteFromMenu = (dish) => {
    const filtered = state.menu.filter((recipe) => {
      return recipe.id !== dish.id;
    });
    return dispatch({ type: menuTypes.delete, payload: [...filtered] });
  };

  const value = useMemo(() => {
    return {
      ...state,
      addToMenu,
      deleteFromMenu,
    };
  }, [state]);
  
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuContext;
