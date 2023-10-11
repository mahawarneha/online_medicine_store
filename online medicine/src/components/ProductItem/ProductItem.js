const ProductItem = ({ product, onAdd, onDelete, type }) => {


  return (
    <div className='productItems'>
      <img key={product.image} src={product.image || null} alt="image" />
      <h1>{product.productName}</h1>
      <p>{product.description}</p>

      {type === 'cart' ? (
        <>
          <p className="quantity">Quanity: {product.quantity}</p>
          <h2>Price: ₹{product.totalPrice}</h2>

        </>
      ) : (
        <h2>Price: ₹{product.price}</h2>
      )}

      <div className='submit-button'>
      {type !== 'cart' && <button onClick={(_e) => onAdd(product)}>Add to Cart</button>}
        <button className="remove" onClick={(_e) => onDelete(product.productId)} >Remove</button>
      </div>
    </div>
  );
};

export default ProductItem;
