import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  MobileNav,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaShoppingBag } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { IoSunnySharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Home = ({ addCart }) => {
  const [openNav, setOpenNav] = useState(false);
  const [searchInput, setSearchInput] = useState(null);
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navigate = useNavigate();
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  lg:gap-6">
      <div className=" border-b-2  mb-3 flex  justify-between lg:hidden">
        <div className="flex mb-2">
          {" "}
          <h5 className=" text-lg">Follow us on</h5>
          <FaFacebook className="mt-2 ms-2 hover:text-blue-500 transition-colors text-lg  cursor-pointer" />
          <FaInstagram className="mt-2 ms-2 hover:text-rose-700 transition-colors text-lg  cursor-pointer" />
        </div>
        <div className="flex">
          <MdContactSupport className="text-2xl  " />
          <span>
            <span className="me-2 hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer ">
              Support
            </span>
          </span>{" "}
          <span className="border-x-4 me-2 px-3">
            {" "}
            <span className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer">
              Register
            </span>
          </span>{" "}
          <span>
            {" "}
            <span className="me-3 hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer">
              Log in
            </span>
          </span>{" "}
        </div>
      </div>
      <div></div>
      <label
        style={{ outline: "none", border: "2px white solid" }}
        className="input   flex items-center gap-2 bg-transparent lg:hidden  "
      >
        <input
          type="text"
          className=" grow placeholder:text-white     "
          placeholder="Type here"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          onClick={() => navigate(`search/${searchInput}`)}
          disabled={searchInput != null ? "false" : "true"}
          className=" bg-green-800 p-2 rounded font-normal"
        >
          SEARCH
        </Button>{" "}
      </label>
      <div className=" items-start  gap-y-3 lg:hidden mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  lg:gap-6">
        <span className="me-2 px-3" onClick={() => navigate("/smartphones")}>
          {" "}
          <span className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer">
            Smartphones
          </span>
        </span>{" "}
        <span className="me-2 px-3">
          {" "}
          <span
            onClick={() => navigate("/laptops")}
            className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
          >
            Laptops
          </span>
        </span>{" "}
        <span className="me-2 px-3">
          {" "}
          <span
            onClick={() => navigate("/fragrances")}
            className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
          >
            Fragrances{" "}
          </span>
        </span>{" "}
        <span className="me-2 px-3">
          {" "}
          <span
            onClick={() => navigate("/skincare")}
            className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
          >
            Skincare
          </span>
        </span>{" "}
        <span className="me-2 px-3">
          {" "}
          <span
            onClick={() => navigate("/groceries")}
            className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
          >
            Groceries{" "}
          </span>
        </span>{" "}
        <span className="me-2 px-3">
          {" "}
          <span
            onClick={() => navigate("/home-decoration")}
            className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
          >
            Home-decoration{" "}
          </span>
        </span>{" "}
        <span className="me-2 px-3">
          {" "}
          <span
            onClick={() => navigate("/furniture")}
            className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
          >
            Furniture
          </span>
        </span>{" "}
        <span className="me-2 px-3">
          {" "}
          <span
            onClick={() => navigate("/tops")}
            className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
          >
            Tops{" "}
          </span>
        </span>{" "}
        <span className="me-2 px-3">
          {" "}
          <span className="  mb-2 cursor-pointer ">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>{" "}
          </span>
        </span>{" "}
      </div>
      <div className="indicator lg:hidden ">
        <span className="indicator-item badge border-0 bg-white text-black font-bold w-2">
          {addCart.length}
        </span>
        <GiShoppingCart className="text-3xl" />
      </div>
    </ul>
  );

  return (
    <div>
      <Navbar className="mx-auto  border-0 px-4 py-2 lg:px-8 lg:py-4 text-white bg-green-700 rounded-none">
        <div className=" border-b-2  mb-3  flex justify-between hidden-sm">
          <div className="flex mb-2">
            {" "}
            <h5 className=" text-lg">Follow us on</h5>
            <FaFacebook className="mt-2 ms-2 hover:text-blue-500 transition-colors text-lg  cursor-pointer" />
            <FaInstagram className="mt-2 ms-2 hover:text-rose-700 transition-colors text-lg  cursor-pointer" />
          </div>
          <div className="flex">
            <MdContactSupport className="text-2xl  " />
            <span>
              <span className="me-2 hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer ">
                Support
              </span>
            </span>{" "}
            <span className="border-x-4 me-2 px-3">
              {" "}
              <span className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer">
                Register
              </span>
            </span>{" "}
            <span>
              {" "}
              <span className="me-3 hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer">
                Log in
              </span>
            </span>{" "}
          </div>
        </div>
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
          <Typography
            as="a"
            className="mr-4 cursor-pointer py-1.5 font-medium flex"
          >
            <RiMenu3Line className="text-4xl mt-1 mx-3" />
            <h4 className="text-4xl flex">
              {" "}
              <span>
                <FaShoppingBag />
              </span>{" "}
              <span onClick={() => navigate("/")}> Goo-Market</span>
            </h4>
          </Typography>

          <div className="hidden lg:block">{navList}</div>

          <div className="">
            <label
              style={{ outline: "none", border: "2px white solid" }}
              className="input flex items-center gap-2 bg-transparent hidden-sm  "
            >
              <input
                type="text"
                className=" grow placeholder:text-white "
                placeholder="Type here"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button
                className=" bg-green-800 p-2  rounded font-normal"
                onClick={() => navigate(`search/${searchInput}`)}
                disabled={searchInput != null ? "true" : "false"}
              >
                SEARCH
              </Button>{" "}
            </label>

            <div className="flex justify-center gap-x-7 hidden-sm mt-4">
              <span className="">
                {" "}
                <span
                  onClick={() => navigate("/smartphones")}
                  className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
                >
                  Smartphones
                </span>
              </span>{" "}
              <span>
                {" "}
                <span
                  onClick={() => navigate("/laptops")}
                  className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
                >
                  Laptops{" "}
                </span>
              </span>{" "}
              <span>
                {" "}
                <span
                  onClick={() => navigate("/fragrances")}
                  className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
                >
                  Fragrances{" "}
                </span>
              </span>{" "}
              <span>
                {" "}
                <span
                  onClick={() => navigate("/skincare")}
                  className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
                >
                  Skincare
                </span>
              </span>{" "}
              <span>
                {" "}
                <span
                  onClick={() => navigate("/groceries")}
                  className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
                >
                  Groceries{" "}
                </span>
              </span>{" "}
              <span>
                {" "}
                <span
                  onClick={() => navigate("/home-decoration")}
                  className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
                >
                  Home-decoration{" "}
                </span>
              </span>{" "}
              <span>
                {" "}
                <span
                  onClick={() => navigate("/furniture")}
                  className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
                >
                  Furniture
                </span>
              </span>{" "}
              <span>
                {" "}
                <span
                  onClick={() => navigate("/tops")}
                  className="  mb-2  hover:border-b-2 hover:text-lime-600 hover:border-lime-600 cursor-pointer"
                >
                  Tops{" "}
                </span>
              </span>{" "}
              <span>
                {" "}
                <span className="  mb-2 cursor-pointer">
                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input
                      type="checkbox"
                      className="theme-controller"
                      value="synthwave"
                    />

                    {/* sun icon */}
                    <svg
                      className="swap-on fill-current w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      className="swap-off fill-current w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>{" "}
                </span>
              </span>{" "}
            </div>
          </div>
          <div className="indicator  hidden-sm">
            <Popover
              open={openPopover}
              handler={setOpenPopover}
              placement="bottom-start"
            >
              <PopoverHandler {...triggers}>
                <div>
                  <span className="indicator-item badge  border-0 bg-white text-black font-bold w-2">
                    {addCart.length}
                  </span>
                  <Button className="border-0  outline-none">
                    {" "}
                    <GiShoppingCart
                      className="text-3xl "
                      onClick={() => navigate("/addtocard")}
                    />
                  </Button>
                </div>
              </PopoverHandler>
              <PopoverContent
                {...triggers}
                className="z-50 max-w-[26rem] rounded-2xl border-2 border-green-500"
              >
                <div className="w-[25em]">
                  <Typography className="text-lg rounded-t-lg text-center pg-home border-b-2 border-green-700  w-full py-5 font-bold text-green-700">
                    Recenlty Added Products
                  </Typography>
                </div>
                <Typography variant="small">
                  {addCart.length == 0 ? (
                    <div className="flex-center flex-col h-96">
                      <img
                        src="https://goomarket.vercel.app/assets/shopping_cart-b0846037.png"
                        alt="Not Found"
                        className="w-40"
                      />
                      <p className="text-black">No Products Yet!</p>
                      <Button
                        onClick={() => navigate("/")}
                        className="mt-5 bg-green-800 outline-none rounded text-white px-5 text-md py-2 hover:shadow-lg transition-colors hover:shadow-green-800"
                      >
                        GO SHOPING NOW!
                      </Button>
                    </div>
                  ) : (
                    <div>
                      {addCart &&
                        addCart.map((data, index) => (
                          <div
                            key={index}
                            className="flex justify-between mx-3 items-center font-bold text-black border-b-4"
                          >
                            <div className="flex justify-center items-center gap-6">
                              <div className="avatar">
                                <div className="w-16 rounded-full ring ring-green-900 ring-offset-base-100 ring-offset-2 my-5 ms-3">
                                  <img src={data.thumbnail} />
                                </div>
                              </div>
                              <span>{data.title}</span>
                            </div>
                            <span className="text-green-700 me-5">
                              EGP{data.price}
                            </span>
                          </div>
                        ))}
                      <div className="flex justify-center mb-5">
                        <Button
                          onClick={() => navigate("/addtocard")}
                          className="mt-5 bg-green-800 outline-none rounded text-white px-5 text-md py-2 hover:shadow-lg transition-colors hover:shadow-green-800"
                        >
                          VIEW MY SHOPING CART
                        </Button>
                      </div>
                    </div>
                  )}
                </Typography>
              </PopoverContent>
            </Popover>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">{navList}</div>
        </MobileNav>
      </Navbar>
    </div>
  );
};
export default Home;
/*

*/
