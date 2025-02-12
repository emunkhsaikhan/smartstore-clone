import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div>
      <div>this is product page</div>
      <p>{productId}</p>
    </div>
  );
};

export default Product;
