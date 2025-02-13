import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-[158px]">
      <h1>Product Page рүү зочлохын тулд </h1>
      <Link to={"/product/2"} className="text-primary_blue text-3xl">
        энд дарна уу.
      </Link>
    </div>
  );
};

export default Home;
