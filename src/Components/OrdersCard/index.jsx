import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border-black">
      <p>
        <span>{date}</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
      <p></p>
    </div>
  );
};

export default OrdersCard;
