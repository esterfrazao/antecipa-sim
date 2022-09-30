import { createContext, useContext, useState } from "react";
import api from "../services";

const AntecipationContext = createContext();

export const AntecipationProvider = ({ children }) => {
  const [results, setResults] = useState({});
  const [message, setMessage] = useState("Preencha o formulário para simular");

  const simulate = (data) => {
    setMessage("Carregando...");
    api
      .post("", data)
      .then((res) => setResults(res.data))
      .catch((err) => setMessage(err))
      .then(() => setMessage(false));
  };

  return (
    <AntecipationContext.Provider
      value={{
        results,
        simulate,
        message,
      }}
    >
      {children}
    </AntecipationContext.Provider>
  );
};

export const useSimulator = () => useContext(AntecipationContext);
