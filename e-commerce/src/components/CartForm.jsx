import React, { useState } from "react";
import Navbar from "../cart/Navbar";
import ShopCart from "../cart/ShopCart";
import Cart from "../cart/Cart";
const CartForm = () => {
  const [show, setShow] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        // agar already cart me hai to amount +1
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        // agar nahi hai to new entry with amount = 1
        return [...prev, { ...product, amount: 1 }];
      }
    });
  };

  const handleChange = (item, d) => {
    setCartItems((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, amount: Math.max(1, cartItem.amount + d) }
          : cartItem
      )
    );
  };

  return (
    <div>
      <Navbar setShow={setShow} size={cartItems.length} />
      {show ? (
        <ShopCart handleClick={handleClick} />
      ) : (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default CartForm;
