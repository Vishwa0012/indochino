import React from "react";

const Measure = () => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center text-center pt-10">
          <h1 className="text-3xl font-bold">THE MADE TO MEASURE DIFFERENCE</h1>
          <p className="h-1 w-40 bg-gray-300 mt-4"></p>
          <p className="font-bold text-lg pt-6">
            We create suits and shirts customized to your exact measurnment and
            personlized style,at
            <br />
            excellent prices{" "}
          </p>
          <div className="mt-5 border-[#5F9DD8] border-4 py-2 px-8">
            <button className="text-2xl font-bold text-[#5F9DD8]">
              SEE THE SUITS
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Measure;
