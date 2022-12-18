import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductShowPage() {
  const [product, setProduct] = useState([]);
  const params = useParams();

  const handleShowProduct = () => {
    axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  };

  useEffect(handleShowProduct, []);

  return (
    <div className="container">
      <h1>Product Info</h1>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.quantity}</p>
    </div>
  );
}
