import "./App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { ProductNew } from "./ProductNew";
import { ProductShowPage } from "./ProductShowPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/new" element={<ProductNew />} />
        <Route path="products/:id" element={<ProductShowPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
