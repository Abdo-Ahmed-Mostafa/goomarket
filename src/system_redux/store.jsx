import { configureStore } from "@reduxjs/toolkit";
import { finshFrgrances } from "./Slices/frgrancesSlice";
import { finshGroceries } from "./Slices/groceriesSlices";
import { finshHomeDecoration } from "./Slices/home-decoration";
import { finshLaptops } from "./Slices/laptopsSlices";
import { finshSkincares } from "./Slices/skincareSlice";
import { finshSmartPhone } from "./Slices/smartPhoneSlices";
import { finshFurniture } from "./Slices/furnitureSlices";
import { finshTops } from "./Slices/topsSlices";
import { finshAllProduct } from "./Slices/ourProductsSlices";
import { finshSingelProduct } from "./Slices/singleProductsSlices";
import { finshSearch } from "./Slices/searchSlices";
const store = configureStore({
  reducer: {
    finshFrgrances,
    finshGroceries,
    finshHomeDecoration,
    finshLaptops,
    finshSkincares,
    finshSmartPhone,
    finshFurniture,
    finshTops,
    finshAllProduct,
    finshSingelProduct,
    finshSearch,
  },
});

export default store;
