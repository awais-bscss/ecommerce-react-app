import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.storeName} onClick={() => setShow(true)}>
        A-store
      </div>
      <div className={styles.cartContainer} onClick={() => setShow(false)}>
        <FaShoppingCart className={styles.cartIcon} />
        <span className={styles.cartCount}>{size}</span>
      </div>
    </nav>
  );
};

export default Navbar;
