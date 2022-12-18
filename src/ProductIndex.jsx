export function ProductIndex(props) {
  return (
    <div className="mt-3 container-fluid">
      <h1 className="mt-2">All Products</h1>
      {props.products.map((product) => (
        <div className="mt-3" key={product.id}>
          {/* {props.images.map((image) => (
            <div key={image.id}>
              <img src={image.url} alt="current image" />
            </div>
          ))} */}
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
