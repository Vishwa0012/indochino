import { useState } from "react";
// #313131 black

const Chinnok = () => {
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
    <section className="bg-[#313131] h-[45vh] mb-11">
      <div className="flex flex-col justify-center text-center items-center">
        <h1 className="text-4xl text-white font-semibold pt-14">
          VISIT US AT CHINOOK CENTRE
        </h1>
        <p className="text-white pt-5 text-xl">Mon to Sat 9:30 - 9</p>
        <p className="text-white pt-2 text-xl">Sun 11-7</p>
        <p className="text-white pt-2 text-xl">
          Across from lululemon on level 1
        </p>
        <p className="text-white pt-12 text-xl font-semibold">
          Grand opening on <span className="font-bold">April 6</span>
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className=" text-[#5F9DD8] font-bold bg-white px-11 py-2 mt-7"
        >
          BOOK AN APPOINTMENT
        </button>
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
      </div>
    </section>
  );
};

export default Chinnok;
