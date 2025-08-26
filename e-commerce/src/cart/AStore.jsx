import React from "react";
import styles from "./AStore.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";
const AStore = ({ product, handleClick }) => {
  return (
    <div
      className={`${styles.productCard} bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
          className="mt-4 flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors"
          onClick={() => {
            handleClick(product);
            toast.success(`${product.name} added to cart! 🛒`);
          }}
        >
          <FiShoppingCart className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AStore;
