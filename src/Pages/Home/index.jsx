import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  const apiUrl = "https://fakestoreapi.com/products";
  // const apiUrl2 = "https://api.escuelajs.co/api/v1/products";
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <Card />
    </Layout>
  );
}

export default Home;
