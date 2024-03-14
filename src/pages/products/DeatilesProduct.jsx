import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getdataSingelProduct,
  increment,
} from "../../system_redux/Slices/singleProductsSlices";
import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { TiShoppingCart } from "react-icons/ti";
import LodingPage from "./../loding-error/LodingPage";

const DeatilesProduct = ({ addToCard }) => {
  const { singelProduct, quantity, lodingSingelProduct } = useSelector(
    (state) => state.finshSingelProduct
  );
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { idproduct } = useParams();
  useEffect(() => {
    dispatch(getdataSingelProduct(idproduct));
  }, []);
  return (
    <div>
      {lodingSingelProduct ? (
        <LodingPage />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 ">
          <div className="flex flex-col">
            <div
              data-te-lightbox-init="true"
              className="flex flex-col gap-4"
              data-id="lightbox-05zw7l18g"
            >
              <div>
                <img
                  src={singelProduct?.thumbnail}
                  className="h-[350px] lg:h-[450px] w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
                />
              </div>
              <div className="flex justify-center gap-5 w-full flex-wrap md:gap-5">
                <div className="w-[120px] md:w-[80px] lg:w-[90px] max-w-full flex items-center justify-start">
                  <img
                    src="https://cdn.dummyjson.com/product-images/1/2.jpg"
                    className="h-[120px] w-full object-contain cursor-zoom-in  hover:border-solid hover:border-2 hover:p-4 hover:border-green-500 transition-all duration-200 ease-linear"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 py-5 ">
            <p className="text-center md:text-start font-bold relative after:absolute  after:bottom-[-10px] after:left-0 after:w-full after:h-[0.1px] after:bg-gray-300  ">
              {singelProduct?.title}
            </p>
            <p className="mt-2 text-gray-500 text-center md:text-start">
              {singelProduct?.description}
            </p>
            <div className="flex gap-5 flex-wrap justify-center md:justify-start text-gray-600 ">
              <p className='relative after:absolute after:content-[" "] after:bg-green-500 after:w-[2px] after:h-full after:top-0 after:bottom-0 after:right-[-10px]'>
                Rating:{singelProduct?.rating}
              </p>
              <p className='relative after:absolute after:content-[" "] after:bg-green-500  after:w-[2px] after:h-full after:top-0 after:bottom-0 after:right-[-10px]'>
                Brand : {singelProduct?.brand}
              </p>
              <p>category : {singelProduct?.category}</p>
            </div>
            <div className="flex flex-col gap-3 bg-gray-100 p-5 ">
              <div className="flex gap-3 flex-wrap justify-center md:justify-start text-sm text-gray-500 ">
                <p className="line-through">EGP {singelProduct?.price}</p>
                <p>Inclusive of taxes</p>
              </div>
              <div className="flex gap-5 flex-wrap justify-center md:justify-start">
                <p className="text-xl text-green-700  font-bold">
                  EGP{" "}
                  {(
                    singelProduct.price -
                    (singelProduct.price * singelProduct.discountPercentage) /
                      100
                  ).toFixed()}
                </p>
                <p class="bg-green-800 font-bold px-5  text-white text-sm items-center flex">
                  {singelProduct?.discountPercentage}% Off
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap justify-center md:justify-start gap-3">
              <p className="text-gray-700 ">Quantity:</p>

              <div className="flex items-center gap-4 ">
                <div className="join bg-white text-black">
                  <button
                    className="join-item btn bg-white text-black hover:bg-white"
                    // disabled={quantity >= 0 ? "true" : "false"}
                    onClick={() => dispatch(decrement())}
                  >
                    -
                  </button>
                  <button className="join-item btn bg-white text-black hover:bg-white">
                    {quantity}
                  </button>
                  <button
                    className="join-item btn bg-white text-black hover:bg-white"
                    onClick={() => dispatch(increment())}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row items-center justify-center md:justify-start normal-case ">
              <button
                onClick={() => addToCard(singelProduct)}
                className=" font-bold text-center transition-all text-xs py-3 px-6 rounded-lg text-white shadow-md  hover:shadow-lg  flex gap-2 items-center justify-center  bg-green-800 hover:shadow-green-800 "
              >
                <span className="text-xl">
                  <TiShoppingCart />
                </span>
                <span className="text-sm">Add to Cart</span>
              </button>
              <button className=" font-bold text-center transition-all text-xs py-3 px-6 rounded-lg text-white shadow-md  hover:shadow-lg  flex gap-2 items-center justify-center  bg-green-800 hover:shadow-green-800 ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeatilesProduct;
