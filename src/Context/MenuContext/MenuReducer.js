import { menuTypes } from "../Types/menuTypes";

export const menuReducer = (state = {}, action) => {
  switch (action.type) {
    case menuTypes.add:
      return { ...state, menu: [...state.menu, action.payload] };
    default:
      return state;
  }
};

export default menuReducer;
