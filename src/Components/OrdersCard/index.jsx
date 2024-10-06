import {
  ChevronRightIcon,
  CalendarDaysIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="flex gap-2">
            <CalendarDaysIcon className="size-6 text-black-500" />
            <span className="font-light">{date}</span>
          </p>
          <p className="flex gap-2">
            <ShoppingBagIcon className="size-6 text-black-500" />
            <span className="font-light">{totalProducts} articles</span>
          </p>
        </div>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="size-6 text-black-500 cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
