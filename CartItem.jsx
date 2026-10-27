import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectCartTotal,
} from './store/CartSlice';

function CartItem({ setPage }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Thank you for shopping at Paradise Nursery 🌿');
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty. Start adding some plants! 🌱</p>
          <button
            className="get-started-button"
            onClick={() => setPage('products')}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="unit-price">Unit Price: ${item.price.toFixed(2)}</p>
              </div>

              <div className="cart-item-controls">
                <button
                  className="cart-item-decrement"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button
                  className="cart-item-increment"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>

              <p className="cart-item-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <div className="cart-total">
              <span>Total Amount:</span>
              <span>
                ${items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>

            <div className="cart-actions">
              <button
                className="get-started-button"
                onClick={() => setPage('products')}
              >
                Continue Shopping
              </button>
              <button className="btn-checkout" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
