import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetail, setIsProductDetail] = useState(false);
  const openProductDetail = () => setIsProductDetail(true);
  const closeProductDetail = () => setIsProductDetail(false);

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        setCount,
        isProductDetail,
        setIsProductDetail,
        openProductDetail,
        closeProductDetail,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
