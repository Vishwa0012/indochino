import React from "react";
import facebook from "../assets/images/facebook-logo.png";
import twitter from "../assets/images/twitter.png";
import insta from "../assets/images/insta.png";

const Footer = () => {
  return (
    <section>
      <div className="flex justify-center items-center text-center gap-12 pt-12 cursor-pointer">
        <img
          src={facebook}
          alt="facebook-image"
          className="h-[35px] w-[35px]"
        />
        <img src={twitter} alt="twitter-image" className="h-[35px] w-[35px]" />
        <img src={insta} alt="insta-image" className="h-[35px] w-[35px]" />
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-9">
        <p className="text-gray-600 font-semibold text-xl">
          Copyright 2024-2099 vishwaInc . All right reserved.
        </p>
        <p className="text-2xl text-[#5F9DD8] mt-9 font-semibold underline underline-offset-2 pb-20">
          *See contest terms and conditions
        </p>
      </div>
    </section>
  );
};

export default Footer;
