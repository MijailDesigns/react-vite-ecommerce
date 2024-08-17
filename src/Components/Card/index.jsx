import { useContext } from "react";
import { ShoppingCardContext } from "../../Context/index";

const Card = ({ data }) => {
  const context = useContext(ShoppingCardContext);

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs p-1 m-2">
          {data?.category}
        </span>
        <img
          src={data?.image}
          alt={data?.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1 m-2"
          onClick={() => context.setCount(context.count + 1)}
        >
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2">{data?.title}</span>
        <span className="text-lg font-medium">${data?.price}</span>
      </p>
    </div>
  );
};

export default Card;
