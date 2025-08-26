import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      className={`${styles.hero} bg-cover bg-center h-96 flex items-center justify-center text-white`}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the best deals on electronics, fashion, and more!
        </p>
        <Link
          to="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
