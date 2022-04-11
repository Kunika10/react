import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import "@fontsource/cormorant-garamond";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import Product from "./Product";
import Productview from "./Productview";



function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="productview" element= {<Productview/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
