import { useState } from "react";

export function ProductIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className="mt-3 container-fluid">
      <input
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        placeholder="Search"
        className="mt-3 form-control container"
      />
      <h1 className="mt-4">All Products</h1>
      {props.products
        .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((product) => (
          <div className="mt-3" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.quantity}</p>
            <button className="mt-1 btn btn-primary" onClick={() => props.onShowProduct(product)}>
              More info
            </button>
          </div>
        ))}
    </div>
  );
}
