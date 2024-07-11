import { useContext, useEffect, useState } from "react";
import featureDataCall from "../data/data";
import { createContext } from "react";

const context = createContext({});

function useGlobalContext() {
  return useContext(context);
}

function GlobalContextProvider({ children }) {
  const [features, setFeatures] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchData() {
    setLoading(true);

    try {
      const response = await featureDataCall();
      if (response) {
        setFeatures(response);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Something went wrong!");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <context.Provider value={{ features, loading, errorMsg }}>
      {children}
    </context.Provider>
  );
}

export { useGlobalContext, GlobalContextProvider };
