import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="bg-green-900  py-5 flex flex-col gap-2">
        <div>
          <p className="text-center text-white text-[12px] sm:text-[16px]">
            PRIVACY POUCY | TERMS OF SERVICE
          </p>
        </div>
        <div>
          <p className="text-center text-white text-[12px] sm:text-[16px]">
            © 2023{" "}
            <span className="hover:text-light-green-500 cursor-pointer">
              Market
            </span>{" "}
            All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
