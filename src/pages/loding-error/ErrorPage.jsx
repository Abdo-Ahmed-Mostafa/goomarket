import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <section className="page_404 text-light  ">
          <div className="px-[6em] pt-5 w-100 ">
            <div className="row">
              <div className=" d-flex justify-content-center  align-items-center">
                <div className=" text-center ">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center text-dark">404</h1>
                  </div>
                  <div className="contant_box_404 mt-5 flex justify-center flex-col items-center">
                    <h1 className="h2">Data Not Founed !</h1>
                    <button
                      onClick={() => navigate("/")}
                      className=" font-bold text-center transition-all text-xs py-3 px-6 rounded-lg text-white shadow-md  hover:shadow-lg  flex gap-2 items-center justify-center  bg-green-800 hover:shadow-green-800  "
                    >
                      <span className="text-xl"></span>
                      <span className="text-sm">Back To Home</span>
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;
