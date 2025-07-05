import React, { useState, useEffect } from "react";
import axios from "axios";
import style from './style.module.css';

export default function Products() {
  const [Products, setProducts] = useState([]);

  async function callApi() {
    try {
      let res = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
      setProducts(res.data.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div className="row">
        {Products.map((product, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className={`${style.card} product border p-2 rounded shadow-sm`}>
              <img
                src={product.imageCover}
                alt={product.title}
                className="w-100"
              />
              <h3 className="fs-5 mt-2">
                {product.title.split(" ").slice(0, 2).join(" ")}
              </h3>
              <p className="text-muted small">
                {product.description.split(" ").slice(0, 3).join(" ")}
              </p>
              <p className="fw-bold">Price: {product.price} EGP</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
