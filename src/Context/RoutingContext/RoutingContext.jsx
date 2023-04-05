import { createContext, useContext, useState } from "react";

const RoutingContext = createContext();

export const useRouting = () => {
  const state = useContext(RoutingContext);
  return state;
};

export const RoutingProvider = ({ children }) => {
  const [prevRoute, setPrevRoute] = useState("/");

  return (
    <RoutingContext.Provider
      value={{
        prevRoute,
        setPrevRoute,
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export default RoutingContext;
