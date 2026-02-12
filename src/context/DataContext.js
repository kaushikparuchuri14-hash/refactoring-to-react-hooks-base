import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = React.createContext();

const { Provider } = DataContext;

const DataContextProvider = ({ children }) => {
  // ✅ Start with totals endpoint so dashboard loads immediately
  const [endpoint, setEndpoint] = useState("/api/totals/");

  const fetchState = useFetch(endpoint);

  const updateEndpoint = (newEndpoint) => {
    setEndpoint(newEndpoint);
  };

  return (
    <Provider value={{ ...fetchState, updateEndpoint }}>
      {children}
    </Provider>
  );
};

export default DataContextProvider;
