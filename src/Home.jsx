import axios from "axios";
import { useState, useEffect } from "react";
import { ProductIndex } from "./ProductIndex";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function Home() {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleIndexImages = () => {
    console.log("handleIndexImages");
    axios.get("http://localhost:3000/images.json").then((response2) => {
      console.log(response2.data);
      setImages(response2.data);
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
  useEffect(handleIndexImages, []);

  return (
    <div className="container">
      <h1 className="mt-4 text-center">Mini Capstone</h1>
      <ProductIndex products={products} images={images} onShowProduct={handleShowProduct} />
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
