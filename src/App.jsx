import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddToCart from "./componets/AddToCart";
import Product from "./componets/Product";
import Header from "./componets/Header";
import Home from "./componets/Home";


function App() {
  return (
    <BrowserRouter>
<Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/cart" element={<AddToCart/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;