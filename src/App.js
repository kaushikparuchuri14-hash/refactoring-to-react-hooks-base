import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import { sales } from "./mocks";

export const globalContext = React.createContext();

const initialState = {
  loading: false,
  error: "",
  salesTotal: 3466,
  subscriptionsTotal: 1492,
  data: sales
};

const App = () => {
  return (
    <globalContext.Provider value={initialState}>
      <DashboardShell />
    </globalContext.Provider>
  );
};

export default App;
