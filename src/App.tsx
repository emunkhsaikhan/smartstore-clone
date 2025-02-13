import "./App.css";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
