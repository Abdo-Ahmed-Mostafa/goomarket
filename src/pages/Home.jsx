import React from "react";
import SeeOurProducts from "./Home/seeOurProducts/SeeOurProducts";
import SeeOurSmartPhone from "./Home/seeOurSmartPhone/SeeOurSmartPhone";
import SeeOurLaptops from "./Home/seeOurLaptops/SeeOurLaptops";
import SeeOurSkincare from "./Home/seeOurSkincare/SeeOurSkincare";
import SeeOurFragrances from "./Home/seeOurFragrances/SeeOurFragrances";
import SeeOurGroceries from "./Home/seeOurGroceries/SeeOurGroceries";
import SeeOurHomeDecoration from "./Home/seeOurHome-Decoration/SeeOurHome-Decoration";
import ImageSlick from "./imgSlick/ImageSlick";

const Home = () => {
  return (
    <div className="">
      <ImageSlick />
      <SeeOurProducts />
      <SeeOurSmartPhone />
      <SeeOurLaptops />
      <SeeOurFragrances />
      <SeeOurSkincare />
      <SeeOurGroceries />
      <SeeOurHomeDecoration />
    </div>
  );
};

export default Home;
