import { useState } from "react";


const News = () => {
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
    <section className="bg-[#313131] pb-12">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-xl font-bold pt-8 ">
          INDOCHINO IN THE NEWS
        </h1>
        <h1 className="text-4xl  text-white my-16">
          "INDOCHINA:{" "}
          <span className="italic">
            THE it's-Too-Good-To-Be-
            <br />
            True-That's-Actually-True-Custom Suit."
          </span>
        </h1>
        <p className="text-white text-2xl">-Forbes</p>
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

export default News;
