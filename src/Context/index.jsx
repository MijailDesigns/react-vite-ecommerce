import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail - Open/Close
  const [isProductDetail, setIsProductDetail] = useState(false);
  const openProductDetail = () => setIsProductDetail(true);
  const closeProductDetail = () => setIsProductDetail(false);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});
  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        setCount,
        isProductDetail,
        setIsProductDetail,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
