import products from "./data";
import AStore from "./AStore";

const ShopCart = ({ handleClick }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <AStore
              product={product}
              handleClick={handleClick}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCart;
