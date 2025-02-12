import "./App.css";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
