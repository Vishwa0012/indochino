import React, { useState } from "react";
import ronaldo from "../assets/images/ronaldo.png";

const Herotext = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You have selected Date: ${date}, Day: ${day}`);
    setIsModalOpen(false);
    setDate("");
    setDay("");
  };

  return (
    <section className="bg-[#5F9DD8] h-auto lg:h-[90vh]">
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center md:pr-60 p-4">
          <img src={ronaldo} className="h-auto w-full lg:w-[450px] pt-2" alt="Ronaldo" />
          <div className="lg:mb-32 mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl text-white font-bold pb-4">
              THE TAILOR IS IN
            </h1>
            <p className="text-lg md:text-xl text-white pb-2">
              The ultimate custom mens wear experience
              <br />
              is now open in <span className="font-bold">Chinook center.</span>
            </p>
            <p className="md:h-[1px] w-64 md:w-96 bg-white my-4"></p>
            <p className="text-lg md:text-xl text-white">
              Visit us by November 30 to be entered in a draw <br /> for a
              perfectly tailored wardrobe
            </p>
            <div className="pt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-[#5F9DD8] font-bold bg-white py-2 px-4"
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Enter Your Appointment Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Preferred Date:
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Preferred Time:
                </label>
                <input
                  type="text"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder="Enter the time (e.g. 9:00 am)"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mr-4 px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#5F9DD8] text-white font-bold rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Herotext;
