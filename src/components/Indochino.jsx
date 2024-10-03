import React from "react";

const members = [
  { src: "src/assets/images/model1.jpg", alt: "member1" },
  { src: "src/assets/images/model2.jpg", alt: "member2" },
  { src: "src/assets/images/model3.jpg", alt: "member3" },
  { src: "src/assets/images/model4.jpg", alt: "member4" },
  { src: "src/assets/images/model5.jpg", alt: "member5" },
  { src: "src/assets/images/model6.jpg", alt: "member6" },
  { src: "src/assets/images/model7.jpg", alt: "member7" },
  { src: "src/assets/images/model8.jpg", alt: "member8" },
  { src: "src/assets/images/model9.jpg", alt: "member9" },
  { src: "src/assets/images/model10.jpg", alt: "member10" },
];

const Indochino = () => {
  return (
    <section className="bg-white py-12">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-semibold underline underline-offset-2 pb-4">
          #INDOCHINO
        </h1>
      </div>
      {/* Responsive grid setup */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4 md:px-12 lg:px-24 xl:px-36">
        {members.map((item, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={item.src}
              alt={item.alt}
              className="h-auto w-full max-w-[300px] rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Indochino;
