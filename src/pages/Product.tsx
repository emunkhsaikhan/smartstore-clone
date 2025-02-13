import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <section className="w-full max-w-[1300px] mx-auto">
      {/* DESCRIPTION & HEADER */}
      <Header />
      <ProductCard />
    </section>
  );
};

export default Product;
