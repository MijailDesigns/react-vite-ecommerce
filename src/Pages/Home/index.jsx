import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCardContext } from "../../Context/index";

function Home() {
  const context = useContext(ShoppingCardContext);

  const renderVIew = () => {
    const itemsToRender =
      context.searchByTitle?.length > 0 ? context.filteredItems : context.items;

    if (itemsToRender?.length > 0) {
      return itemsToRender.map((item) => <Card key={item.id} data={item} />);
    } else {
      return <p>No Results Found</p>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <div className="flex gap-4">
        <input
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          type="text"
          placeholder="Search by title"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <input
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          type="text"
          placeholder="Search by category"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderVIew()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
