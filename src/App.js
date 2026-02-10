import React, { useState } from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import { useFetch } from "./hooks/useFetch";

export const globalContext = React.createContext();

const App = () => {
  const [endpoint, setEndpoint] = useState("");
  const value = useFetch(endpoint);

  return (
    <globalContext.Provider value={value}>
      <DashboardShell fetchDataset={setEndpoint} />
    </globalContext.Provider>
  );
};

export default App;
