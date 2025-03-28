import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      setProducts(data.products);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="min-h-screen common-padding">
      <h1 className="text-3xl pt-8 font-bold">All products</h1>
      {error && <p className="text-red-500 text-3xl">Something went wrong</p>}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8">
          <div className="min-h-[70vh] border border-amber-400 bg-slate-800 flex justify-between flex-col gap-4 p-8 hover:bg-neutral-200 transition">
            <div className="md:w-[28vw] h-auto"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

function ProductCard({ product }) {
  return (
    <Link
      to={`product/${product.id}`}
      className="min-h-[70vh] border border-amber-400 flex justify-between flex-col gap-4 p-8 hover:bg-neutral-200 transition"
    >
      <img src={product.thumbnail} alt="" className="md:w-[28vw] h-auto" />
      <div className="">
        <div className="flex justify-between">
          <p>{product.title}</p>
          <p>$ {product.price}</p>
        </div>
        <p>{product.rating} / 5</p>
      </div>
    </Link>
  );
}

export default Home;
