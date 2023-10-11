import ProductItem from '../../components/ProductItem/ProductItem';
import './cart.css'

const Cart = ({ cartItems, onAdd, onDelete }) => {

  const totalAmount = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPrice,
    0
  );

  return (
    <div className='content'>
      {cartItems?.map((product) =>
        <ProductItem key={product.productId}
          product={product}
          onAdd={onAdd}
          onDelete={onDelete}
          type='cart' />
      )}
      <div className='total-amount'>
        <p>Total Amount:   ₹{totalAmount}</p></div>
    </div>
  );
};

export default Cart;
