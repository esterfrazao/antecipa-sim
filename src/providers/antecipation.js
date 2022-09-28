import { createContext, useContext, useState } from "react";
import api from "../services";

const AntecipationContext = createContext();

export const AntecipationProvider = ({ children }) => {
  const [results, setResults] = useState({});

  const simulate = (data) => {
    api.post("", data).then((res) => setResults(res.data));
  };

  return (
    <AntecipationContext.Provider
      value={{
        results,
        simulate,
      }}
    >
      {children}
    </AntecipationContext.Provider>
  );
};

export const useSimulator = () => useContext(AntecipationContext);
