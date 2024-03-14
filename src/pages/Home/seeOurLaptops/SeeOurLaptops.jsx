import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdataLaptops } from "../../../system_redux/Slices/laptopsSlices";
import { useNavigate } from "react-router-dom";
import LodingPage from "./../../loding-error/LodingPage";

const SeeOurLaptops = () => {
  const { laptops, lodingLaptops } = useSelector((state) => state.finshLaptops);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getdataLaptops());
  }, []);

  return (
    <div>
      {lodingLaptops ? (
        <LodingPage />
      ) : (
        <div className="px-[6em]">
          <div className="mt-7 mb-11 shadow-lg shadow-indigo-500/40 py-4 font-bold border-s-4  border-green-600 text-gray-400">
            <h1 className="lg:text-2xl md:text-lg sm:text-md  ms-2">
              SEE OUR LAPTOPS
            </h1>
          </div>
          <div className="grid grid-cols-1  2xl:grid-cols-4 lg:grid-cols-3 md:ps-[0em] lg:ps-0 2xl:ps-0 sm:ps-[9em]  md:grid-cols-2 sm:grid-cols-1 gap-7 justify-center items-center   pb-11">
            {laptops.products &&
              laptops.products.map((data, index) => (
                <div
                  key={index}
                  className=" card w-80 lg:w-72 md:w-[18em] xl:w-80  bg-white shadow-xl"
                >
                  <figure className="flex-col ">
                    <span
                      style={{ position: "relative" }}
                      className="mb-[-4em] xl:start-[-7em] lg:start-[-6.7em] md:start-[-6.3em] start-[-7em] px-5 bg-green-500 text-white font-bold mt-6 p-2"
                    >
                      Laptops
                    </span>
                    <img
                      src={`${data.thumbnail}`}
                      alt="Shoes"
                      className="h-[16em]"
                    />
                  </figure>
                  <div className="card-body flex-center ">
                    <h2 className="card-title border-b-2 w-full flex-center pb-4">
                      Brand: {data.brand}
                    </h2>
                    <p>{data.title}</p>
                    <div className="flex justify-between px-5 lg:px-0 md:px-0 w-full mt-4 font-bold text-gray-500">
                      <p className="line-through ">EGP {data.price}</p>
                      <p className="border-b pb-2 border-green-700">
                        EGP{" "}
                        {(
                          data.price -
                          (data.price * data.discountPercentage) / 100
                        ).toFixed()}
                      </p>
                      <p className="text-green-700 ">(% Off)</p>
                    </div>
                    <div className="card-actions">
                      <button
                        className="btn btn-accent w-full px-[4em] mt-2 "
                        accordion
                        onClick={() => navigate(`/product/${data.id}`)}
                      >
                        SHOW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeeOurLaptops;
