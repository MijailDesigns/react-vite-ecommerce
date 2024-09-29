import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context/index";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCardContext);

  return (
    <Layout>
      MyOrder
      <div className="flex flex-col w-80">
        {context.order.slice(-1)[0]?.products.map((product) => (
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
