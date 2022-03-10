import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbars from "./components/Navbar";
import ProductDetail from "./pages/detail";
import Home from "./pages/index";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
