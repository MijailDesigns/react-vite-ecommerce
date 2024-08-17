import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context/index";
import { useContext } from "react";

const ProductDetail = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <aside
      className={`${context.isProductDetail ? "flex" : "hidden"}
           product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="size-6 text-black-500"
            onClick={() => {
              context.closeProductDetail();
            }}
          />
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
