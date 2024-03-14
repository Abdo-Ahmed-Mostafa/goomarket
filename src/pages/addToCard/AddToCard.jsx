import React from "react";
import { useNavigate } from "react-router-dom";

const AddToCard = ({ addCart, setAddcart }) => {
  const navigate = useNavigate();
  const incrementt = (data) => {
    let incremen = addCart.map((prod) => {
      if (data.id == prod.id) {
        data.quantity++;
      }
      return prod;
    });
    setAddcart(incremen);
  };
  const decrementt = (data) => {
    let incremen = addCart.map((prod) => {
      if (data.id == prod.id) {
        data.quantity > 1 && data.quantity--;
      }
      return prod;
    });
    setAddcart(incremen);
  };
  const clereCart = () => {
    setAddcart([]);
  };
  const deleteCart = (product) => {
    let del = addCart.filter((data) => {
      if (data.id != product.id) {
        return data;
      }
    });
    setAddcart(del);
  };
  return (
    <div>
      {addCart.length > 0 ? (
        <section class="container mx-auto px-3 pt-10 h-[90vh] sm:h-[70vh] md:h-[60vh] lg:h-[70vh]">
          <div class="block md:hidden">
            <div class="flex justify-center mb-3 text-green-800 tracking-wider font-mono font-bold text-lg">
              <p class="border-x-2 border-green-600  px-3 w-fit">
                The Table is Overflow
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full h-full overflow-auto  ">
              <table class="w-full min-w-max table-auto text-left">
                <thead>
                  <tr class="text-center">
                    <th class="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <p class="block antialiased font-sans text-base text-blue-gray-900 font-semibold leading-none opacity-70  ">
                        S.N
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <p class="block antialiased font-sans text-base text-blue-gray-900 font-semibold leading-none opacity-70  ">
                        Product
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <p class="block antialiased font-sans text-base text-blue-gray-900 font-semibold leading-none opacity-70  ">
                        Unit Price
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <p class="block antialiased font-sans text-base text-blue-gray-900 font-semibold leading-none opacity-70  ">
                        Quantity
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <p class="block antialiased font-sans text-base text-blue-gray-900 font-semibold leading-none opacity-70  ">
                        Total Price
                      </p>
                    </th>
                    <th class="border-b border-blue-gray-100 bg-blue-gray-50  p-4">
                      <p class="block antialiased font-sans text-base text-blue-gray-900 font-semibold leading-none opacity-70">
                        Actions
                      </p>
                    </th>
                  </tr>
                </thead>
                {addCart &&
                  addCart.map((data, index) => (
                    <tbody key={index}>
                      <tr class="text-center">
                        <td class="p-4 border-b border-blue-gray-50 ">
                          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal ">
                            1
                          </p>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50 ">
                          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                            {data.title}
                          </p>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50 ">
                          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal ">
                            EGP {data.price}
                          </p>
                        </td>
                        <td class="flex justify-center p-4 border-b border-blue-gray-50  ">
                          <tr class="cursor-pointer border-solid border-2 border-r-0 rounded rounded-r-none border-gray-200  bg-gray-200 ">
                            <th>
                              <div className="join bg-white text-black">
                                <button
                                  className="join-item btn bg-white text-black hover:bg-white"
                                  onClick={() => decrementt(data)}
                                >
                                  -
                                </button>
                                <button className="join-item btn bg-white text-black hover:bg-white">
                                  {data.quantity}
                                </button>
                                <button
                                  className="join-item btn bg-white text-black hover:bg-white"
                                  onClick={() => incrementt(data)}
                                >
                                  +
                                </button>
                              </div>
                            </th>
                          </tr>

                          <tr class="cursor-pointer border-solid border-2 border-l-0  rounded rounded-l-none border-gray-200 "></tr>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50 ">
                          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal ">
                            EGP {data.quantity * data.price}
                          </p>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50">
                          <p
                            onClick={() => deleteCart(data)}
                            class="block antialiased font-sans text-sm leading-normal cursor-pointer text-green-600 font-bold hover:text-green-400 transition-colors duration-200"
                          >
                            Delete
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
            <div class="flex flex-col gap-5 sm:gap-1 bg-white  rounded-b-xl p-5 ">
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-0 justify-between">
                <button
                  class="align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg border hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85] flex gap-2 text-green-900 border-green-700"
                  type="button"
                  onClick={() => clereCart()}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>{" "}
                  CLEAR CART
                </button>
                <p>
                  Total ({addCart.length}) Items :{" "}
                  <span class="text-green-800text-xl font-bold">
                    EGP{" "}
                    {addCart.length > 0 &&
                      addCart
                        .map((detailse) => {
                          return detailse.quantity * detailse.price;
                        })
                        .reduce((firstPrice, secondPrice) =>
                          Math.floor(firstPrice + secondPrice)
                        )}
                  </span>
                </p>
              </div>
              <div class="flex justify-center sm:justify-end">
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-blue-500/20 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-green-900 hover:shadow-green-700 "
                  type="button"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section class="container mx-auto px-3 pt-10 h-[90vh] sm:h-[70vh] md:h-[60vh] lg:h-[70vh]">
          <div class="h-[65vh]">
            <div class="flex gap-5 h-full flex-col justify-center items-center">
              <img
                class="w-[150px] max-w-full"
                src="https://goomarket.vercel.app/assets/shopping_cart-b0846037.png"
                alt="Shopping Cart"
              />
              <p class="font-normal leading-none opacity-70 tracking-wide dark:text-white">
                Your shopping cart is empty
              </p>
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-blue-500/20 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-green-900 dark:bg-darkbg-card hover:dark:shadow-white hover:dark:shadow hover:shadow-green-700 tracking-wide"
                type="button"
                onClick={() => navigate("/")}
              >
                Go shopping Now
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AddToCard;
