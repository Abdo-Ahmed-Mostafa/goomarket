import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componant/header/Header";
import Footer from "./componant/footer/Footer";
import Home from "./pages/Home";
import "./style.css";
import Furniture from "./pages/pageNave/furniture/Furniture";
import Tops from "./pages/pageNave/tops/Tops";
import SeeOurSmartPhone from "./pages/Home/seeOurSmartPhone/SeeOurSmartPhone";
import SeeOurLaptops from "./pages/Home/seeOurLaptops/SeeOurLaptops";
import SeeOurFragrances from "./pages/Home/seeOurFragrances/SeeOurFragrances";
import SeeOurSkincare from "./pages/Home/seeOurSkincare/SeeOurSkincare";
import SeeOurGroceries from "./pages/Home/seeOurGroceries/SeeOurGroceries";
import SeeOurHomeDecoration from "./pages/Home/seeOurHome-Decoration/SeeOurHome-Decoration";
import AddToCard from "./pages/addToCard/AddToCard";
import DeatilesProduct from "./pages/products/DeatilesProduct";
import SearchBage from "./pages/search/SearchBage";
import ErrorPage from "./pages/loding-error/ErrorPage";
const App = () => {
  const [addCart, setAddcart] = useState([]);
  const addToCard = (detels) => {
    const check = addCart.some((prod) => {
      return prod.id == detels.id;
    });
    if (check) {
      
    } else {
      const result = [...addCart, { ...detels, quantity: 1 }];
      setAddcart(result);
    }
  };
  return (
    <div className=" pg-home text-black">
      <Header addCart={addCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartphones" element={<SeeOurSmartPhone />} />
        <Route path="/laptops" element={<SeeOurLaptops />} />
        <Route path="/fragrances" element={<SeeOurFragrances />} />
        <Route path="/skincare" element={<SeeOurSkincare />} />
        <Route path="/groceries" element={<SeeOurGroceries />} />
        <Route path="/home-decoration" element={<SeeOurHomeDecoration />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/search/:idserch" element={<SearchBage />} />
        <Route
          path="/addtocard"
          element={<AddToCard addCart={addCart} setAddcart={setAddcart} />}
        />
        <Route
          path="/product/:idproduct"
          element={<DeatilesProduct addToCard={addToCard} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
