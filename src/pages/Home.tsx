import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/product/2"}>product</Link>
    </div>
  );
};

export default Home;
