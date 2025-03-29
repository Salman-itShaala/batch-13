import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { productId } = useParams();

  // id --> req , componet mount

  const getProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();

      console.log(data);

      setProduct(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <>
      {loading ? (
        <h1 className="text-3xl">Loading...</h1>
      ) : (
        <>
          <div className="w-full flex gap-4 flex-col md:flex-row mt-8">
            <div className="w-1/2">
              <img src={product.thumbnail} alt="" className="w-full" />
            </div>

            <div className="w-1/2 flex flex-col gap-8">
              <p className="text-3xl text-bold ">{product.title}</p>
              <p className="text-sm text-neutral-800">{product.description}</p>
              <p className="text-3xl text-bold ">$ {product.price}</p>
            </div>
          </div>

          <div className="common-padding grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {product?.reviews?.map((review) => {
              return (
                <div
                  key={review.reviewerEmail}
                  className="p-2 border border-neutral-900 bg-neutral-200 rounded-2xl"
                >
                  <div className="flex gap-4 items-center">
                    <div className="h-8 w-8 rounded-full bg-neutral-900"></div>
                    <div className="font-semibold">{review.reviewerName}</div>
                  </div>
                  <p className="text-end text-sm text-neutral-700">
                    {review.reviewerEmail}
                  </p>
                  <p>Rating: {review.rating}</p>
                  <p className="text-xl">{review.comment}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Product;
