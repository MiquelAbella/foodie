import { useMemo } from "react";
import { createContext, useContext, useState } from "react";

const RoutingContext = createContext();

export const useRouting = () => {
  const state = useContext(RoutingContext);
  return state;
};

export const RoutingProvider = ({ children }) => {
  const [prevRoute, setPrevRoute] = useState("/");

  const value = useMemo(() => {
    return {
      prevRoute,
      setPrevRoute,
    };
  }, [prevRoute]);

  return (
    <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>
  );
};

export default RoutingContext;
