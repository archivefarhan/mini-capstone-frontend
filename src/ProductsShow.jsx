export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div className="container-fluid">
      <h1>Product Information</h1>
      <p> Product Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <p>Quantity: {props.product.quantity}</p>
      <p>Supplier ID: {props.product.supplier_id}</p>
      <h2 className="mt-2 container-fluid">Edit</h2>
      <form className="container-fluid" onSubmit={handleSubmit}>
        <label htmlFor="product_name">Product Name: </label>
        <input className="form-control" type="text" name="name" id="product_name" />
        <br />
        <label htmlFor="product_price">Price: </label>
        <input
          className="form-control"
          type="number"
          min="0.00"
          max="999.99"
          step="0.01"
          name="price"
          id="product_price"
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          className="form-control"
          type="text"
          name="description"
          id="description"
          placeholder="minimum of 10 characters"
        />
        <br />
        <label htmlFor="quantity">Quantity: </label>
        <input className="form-control" type="text" name="quantity" id="quantity" />
        <br />
        <label htmlFor="supplier_id">Supplier ID: </label>
        <input className="form-control" type="number" name="supplier_id" id="supplier_id" placeholder="0" />
        <br />
        <button className="mt-3 btn btn-primary" type="submit">
          Update Product
        </button>
      </form>
      <button className="mt-3 btn btn-danger" onClick={handleClick}>
        Delete Product
      </button>
    </div>
  );
}
