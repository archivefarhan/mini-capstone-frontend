import axios from "axios";
import { useState, useEffect } from "react";
import { ProductIndex } from "./ProductIndex";
import { ProductNew } from "./ProductNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function Home() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params) => {
    console.log("handleCreateProduct", params);
    axios
      .post("http://localhost:3000/products.json", params)
      .then((response) => {
        setProducts([...products, response.data]);
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleUpdateProduct = (id, params) => {
    console.log("handleUpdateProduct", params);
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then((response) => {
      setProducts(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product;
          }
        })
      );
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  const handleDestroyProduct = (product) => {
    console.log("handleDestroyProduct", product);
    axios.delete(`http://localhost:3000/products/${product.id}.json`).then((response) => {
      setProducts(products.filter((p) => p.id !== product.id));
      handleClose();
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div className="container">
      <h1 className="mt-4 text-center">Mini Capstone</h1>
      <ProductNew onCreateProduct={handleCreateProduct} />
      <ProductIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        {" "}
        <ProductsShow
          product={currentProduct}
          onUpdateProduct={handleUpdateProduct}
          onDestroyProduct={handleDestroyProduct}
        />
      </Modal>
    </div>
  );
}
