import axios from "axios";
import { useState } from "react";

export function ProductNew() {
  const [errors, setErrors] = useState([]);

  const handleCreateProduct = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/products.json", params)
      .then((response) => {
        window.location.href = "/";
      })
      .catch((error) => {
        setErrors(error.response.data.errors ? error.response.data.errors : ["Must Login!"]);
      });
  };

  return (
    <div className="container-fluid">
      <h1 className="mt-3" id="product-new">
        New Product
      </h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleCreateProduct}>
        <label htmlFor="Name">Product Name: </label>
        <input className="form-control" type="text" name="name" placeholder="Name" id="name" />
        <br />
        <label htmlFor="price" name="price">
          Price:{" "}
        </label>
        <input
          className="form-control"
          type="number"
          name="price"
          step="0.01"
          min="0.00"
          max="1000000.00"
          id=" price"
          placeholder="$0.00"
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          className="form-control"
          type="text"
          name="description"
          id="description"
          placeholder="Description of the product"
        />
        <br />
        <label htmlFor="quantity">Quantity: </label>
        <input className="form-control" type="number" min="0" max="999" placeholder="0" />
        <br />
        <label htmlFor="supplier_id">Supplier Id:</label>
        <input className="form-control" type="number" name="supplier_id" id="supplier_id" />
        <br />
        <button className="mt-1 btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
