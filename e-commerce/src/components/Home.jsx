import styles from "./Home.module.css";
import CartForm from "./CartForm";
import Footer from "./Footer";
import Hero from "./Hero";

// Sample product data

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <CartForm />
      <Footer />
    </div>
  );
};

export default Home;
