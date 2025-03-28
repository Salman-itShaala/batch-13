import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  // id --> req , componet mount

  const getProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();

    console.log(data);

    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {product ? (
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-1/2">
            <img src={product.thumbnail} alt="" />
          </div>

          <div className="w-1/2">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>$ {product.price}</p>
          </div>
        </div>
      ) : (
        <h1>No pruduct data available</h1>
      )}
    </>
  );
};

export default Product;
