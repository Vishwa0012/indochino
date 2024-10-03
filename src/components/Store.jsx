import React from "react";

const Store = () => {
  return (
    <section className="bg-[#5F9DD8] h-auto md:h-[45vh] mt-11 text-white">
      <div className="pt-10 flex flex-col md:flex-row px-8 md:px-32 justify-around gap-8 md:gap-5">
        <div className="flex flex-col items-center text-center">
          <img
            src="src/assets/images/men-suit.png"
            className="h-20 w-20 border-2 border-white rounded-full p-2"
            alt="Suit"
          />
          <h1 className="text-xl md:text-2xl pt-4 font-semibold">
            COME SEE US
          </h1>
          <div className="h-[2px] w-20 md:w-40 mt-5 bg-white"></div>
          <div className="text-center mt-4 text-sm md:text-xl">
            Schedule an appointment with a style guide
            <br />
            we'll take your measurements and walk you
            <br />
            through all suiting options
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="src/assets/images/men-suit.png"
            className="h-20 w-20 border-2 border-white rounded-full p-2"
            alt="Suit"
          />
          <h1 className="text-xl md:text-2xl pt-4 font-semibold">
            MAKE IT YOUR OWN
          </h1>
          <div className="h-[2px] w-20 md:w-40 mt-5 bg-white"></div>
          <div className="text-center mt-4 text-sm md:text-xl">
            Schedule an appointment with a style guide
            <br />
            we'll take your measurements and walk you
            <br />
            through all suiting options
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="src/assets/images/men-suit.png"
            className="h-20 w-20 border-2 border-white rounded-full p-2"
            alt="Suit"
          />
          <h1 className="text-xl md:text-2xl pt-4 font-semibold">
            PERFECT THE FIT
          </h1>
          <div className="h-[2px] w-20 md:w-40 mt-5 bg-white"></div>
          <div className="text-center mt-4 text-sm md:text-xl">
            Schedule an appointment with a style guide
            <br />
            we'll take your measurements and walk you
            <br />
            through all suiting options
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
