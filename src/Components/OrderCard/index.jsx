import { useContext } from "react";
import { ShoppingCardContext } from "../../Context/index";
import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const { id, title, imageUrl, price } = props;
  const context = useContext(ShoppingCardContext);
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
        <p className="text-sm font-light ">{title}</p>
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
