import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context/index";
import { useContext } from "react";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <aside
      className={`${context.isCheckoutSideMenu ? "flex" : "hidden"}
           checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="size-6 text-black-500 cursor-pointer"
            onClick={() => {
              context.closeCheckoutSideMenu();
            }}
          />
        </div>
      </div>

      <div className="px-4 overflow-y-auto">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between">
          <span className="text-xl font-medium">Total:</span>
          <span className="text-xl font-medium">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
