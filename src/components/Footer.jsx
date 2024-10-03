import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="flex justify-center items-center text-center gap-12 pt-12 cursor-pointer">
        <img
          src="src/assets/images/facebook-logo.png"
          alt="facebook-image"
          className="h-[35px] w-[35px]"
        />
        <img
          src="src/assets/images/twitter.png"
          alt="twitter-image"
          className="h-[35px] w-[35px]"
        />
        <img
          src="src/assets/images/insta.png"
          alt="insta-image"
          className="h-[35px] w-[35px]"
        />
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
