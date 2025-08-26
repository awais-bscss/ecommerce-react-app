import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div
      className={`${styles.header} bg-blue-600 text-white text-center py-2 md:py-3`}
    >
      <p className="text-sm md:text-base font-semibold">
        Shop now and get free shipping on all orders! 🛒
      </p>
    </div>
  );
};

export default Header;
