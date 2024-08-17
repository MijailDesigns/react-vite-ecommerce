import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCardContext.Provider value={{ count, setCount }}>
      {children}
    </ShoppingCardContext.Provider>
  );
};
