import React from "react";
import styles from "./Cart.module.css";

const Cart = ({ cartItems = [], setCartItems, handleChange }) => {
  const getTotalPrice = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + (parseFloat(item.price) || 0) * (item.amount || 1),
        0
      )
      .toFixed(2);
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.cartImage}
            />
            <div className={styles.details}>
              <h3>{item.name}</h3>
              <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
              <div className={styles.quantity}>
                <button onClick={() => handleChange(item, -1)}>-</button>
                <span>{item.amount}</span>
                <button onClick={() => handleChange(item, 1)}>+</button>
              </div>
              <p>
                Subtotal: ${(parseFloat(item.price) * item.amount).toFixed(2)}
              </p>
              <button
                onClick={() => handleRemove(item.id)}
                className={styles.remove}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && <h3>Total: ${getTotalPrice()}</h3>}
    </div>
  );
};

export default Cart;
