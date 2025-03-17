import { Navbar } from "./Components/Navbar/Navbar";
import{BrowserRouter,Routes,Route}from "react-router-dom";
import Shop from "./Pages/shop.jsx"
import Shopcategory from "./Pages/shopcategory.jsx"
import Cart from "./Pages/Cart.jsx";
import Loginsignup from "./Pages/loginsignup.jsx";
import Product from "./Pages/Product.jsx";
import Item from "./Components/Item/Item.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import men_banner from "./Components/Assets/Frontend_Assets/banner_mens.png"
import women_banner from "./Components/Assets/Frontend_Assets/banner_women.png"
import kid_banner from "./Components/Assets/Frontend_Assets/banner_kids.png"




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/men" element={<Shopcategory banner={men_banner} category="men" />}></Route>
          <Route
            path="/women"
            element={<Shopcategory banner={women_banner}category="women" />}
          ></Route>
          <Route path="/kids" element={<Shopcategory banner={kid_banner} category="kids" />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Loginsignup />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path=":/productId" element={<Product/>}></Route>
          <Route path="/item"element={<Item/>}></Route>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

