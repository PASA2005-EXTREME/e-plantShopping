import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
  selectCartTotal,
} from './store/CartSlice';
import { Navbar } from './App';

function CartItem({ setPage }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Checkout is on its way. Thanks for shopping at Paradise Nursery!');
  };

  return (
    <>
      <Navbar setPage={setPage} />

      <main className="cart-page">
        <h2>Your Cart</h2>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty — time to find your perfect plant! 🌱</p>
            <button
              className="btn-continue"
              onClick={() => setPage('products')}
            >
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="unit-price">Unit price: ${item.price.toFixed(2)}</p>
                </div>

                <div className="cart-item-controls">
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="qty-count">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <span className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                  aria-label={`Remove ${item.name}`}
                  title="Remove item"
                >
                  🗑
                </button>
              </div>
            ))}

            <div className="cart-summary">
              <div className="cart-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="cart-actions">
                <button
                  className="btn-continue"
                  onClick={() => setPage('products')}
                >
                  ← Continue Shopping
                </button>
                <button className="btn-checkout" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default CartItem;
