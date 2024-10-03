import React from "react";
import member1 from "../assets/images/model1.jpg";
import member2 from "../assets/images/model2.jpg";
import member3 from "../assets/images/model3.jpg";
import member4 from "../assets/images/model4.jpg";
import member5 from "../assets/images/model5.jpg";
import member6 from "../assets/images/model6.jpg";
import member7 from "../assets/images/model7.jpg";
import member8 from "../assets/images/model8.jpg";
import member9 from "../assets/images/model9.jpg";
import member10 from "../assets/images/model10.jpg";

const members = [
  { src: member1, alt: "member1" },
  { src: member2, alt: "member2" },
  { src: member3, alt: "member3" },
  { src: member4, alt: "member4" },
  { src: member5, alt: "member5" },
  { src: member6, alt: "member6" },
  { src: member7, alt: "member7" },
  { src: member8, alt: "member8" },
  { src: member9, alt: "member9" },
  { src: member10, alt: "member10" },
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
