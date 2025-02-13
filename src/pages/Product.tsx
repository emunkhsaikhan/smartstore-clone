import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const { productId } = useParams();
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <section className="w-full max-w-[1300px] mx-auto">
      {/* DESCRIPTION & HEADER */}
      <Header />
      <ProductCard />
    </section>
  );
};

export default Product;
