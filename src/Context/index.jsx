import { createContext, useState, useEffect } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail - Open/Close
  const [isProductDetail, setIsProductDetail] = useState(false);
  const openProductDetail = () => setIsProductDetail(true);
  const closeProductDetail = () => setIsProductDetail(false);

  // Checkout side menu - Open/Close
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});
  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);
  // Shopping Cart - Remove products from cart
  const removeProduct = (id) => {
    const newCartProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newCartProducts);
  };

  //Shopping cart - Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  const apiUrl = "https://fakestoreapi.com/products";
  // const apiUrl2 = "https://api.escuelajs.co/api/v1/products";
  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    } else {
      setFilteredItems(items);
    }
  }, [items, searchByTitle]);

  console.log(filteredItems);

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
        isCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        removeProduct,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
