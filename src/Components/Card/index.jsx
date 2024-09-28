import { useContext } from "react";
import { ShoppingCardContext } from "../../Context/index";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
  const context = useContext(ShoppingCardContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };

  const addProductsToCart = (event, productData) => {
    // esto es para evitar la propagacion del evento del padre en la linea de showProduct
    event.stopPropagation();
    context.setCartProducts([
      ...context.cartProducts,
      { ...productData, units: 1 },
    ]);
    context.setCount(context.count + 1);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(
      (product) => product.id === id
    ).length;
    return isInCart ? (
      <div className="absolute top-0 right-0 flex justify-center items-center bg-green-600 w-6 h-6 rounded-full p-1 m-2">
        <CheckIcon className="size-6 text-white" />
      </div>
    ) : (
      <div
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1 m-2"
        onClick={(event) => addProductsToCart(event, data)}
      >
        <PlusIcon className="size-6 text-black" />
      </div>
    );
  };
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs p-1 m-2">
          {data?.category}
        </span>
        <img
          src={data?.image}
          alt={data?.title}
          className="w-full h-full object-cover rounded-lg"
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2">{data?.title}</span>
        <span className="text-lg font-medium">${data?.price}</span>
      </p>
    </div>
  );
};

export default Card;
