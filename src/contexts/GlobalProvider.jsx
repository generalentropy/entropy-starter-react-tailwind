import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [foo, setFoo] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        foo,
        setFoo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
