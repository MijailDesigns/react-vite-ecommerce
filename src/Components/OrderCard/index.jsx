import { useContext } from "react";
import { ShoppingCardContext } from "../../Context/index";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, units } = props;
  const context = useContext(ShoppingCardContext);

  const addProductUnit = (id) => {
    const index = context.cartProducts.findIndex(
      (product) => product.id === id
    );
    const products = [...context.cartProducts];
    products[index].units++;
    context.setCartProducts(products);
  };
  const reduceProductUnit = (id) => {
    if (units === 1) {
      context.removeProduct(id);
      return;
    }
    const index = context.cartProducts.findIndex(
      (product) => product.id === id
    );
    const products = [...context.cartProducts];
    products[index].units--;
    context.setCartProducts(products);
  };
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <div>
          <p className="text-sm font-light ">{title}</p>
          <div className="flex items-center">
            <div
              className="flex justify-center items-center bg-slate-500 w-6 h-6 rounded-full p-1 m-2"
              onClick={(event) => reduceProductUnit(id)}
            >
              <MinusIcon className="size-4 text-black-500 cursor-pointer" />
            </div>
            <p>{units}</p>
            <div
              className="flex justify-center items-center bg-slate-500 w-6 h-6 rounded-full p-1 m-2"
              onClick={(event) => addProductUnit(id)}
            >
              <PlusIcon className="size-4 text-black-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <div>
          <XMarkIcon
            className="size-6 text-black-500 cursor-pointer"
            onClick={() => context.removeProduct(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
