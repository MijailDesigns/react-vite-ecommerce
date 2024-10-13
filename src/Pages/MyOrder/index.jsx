import Layout from "../../Components/Layout";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context/index";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCardContext);
  const { id } = useParams();
  console.log(id);

  let index = id === "last" ? context.order.length - 1 : id;

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            units={product.units}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
