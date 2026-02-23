import React from "react";
import CategoryHeading from "../Hero/CategoryHeading";
import fruitsVeggiesImg from "../../assets/FruitCard.png";
import { GoHeartFill } from "react-icons/go";
import { FaLeaf } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { TbSeeding } from "react-icons/tb";

function Value() {
  // value data
  const Value = [
    {
      id: 1,
      title: "Trust",
      para: "We build strong relationships by delivering honest pricing, authentic products, and complete transparency in every order.",
      img: <GoHeartFill />,
    },
    {
      id: 2,
      title: "Food Safety",
      para: "Every product goes through strict quality and hygiene checks to ensure maximum freshness and safety for your family.",
      img: <FaLeaf />,
    },
    {
      id: 3,
      title: "Fast Delivery",
      para: "Quick processing, secure packaging, and on-time delivery so your groceries reach you fresh and hassle-free.",
      img: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "100% Organic",
      para: "Naturally grown, chemical-free groceries sourced directly from trusted farms for a healthier lifestyle.",
      img: <TbSeeding />,
    },
  ];

  // splitting the value data into two parts for left and right sections
  // left value items
  const leftValue = Value.splice(0, 2).map((item) => {
    return (
      <div
        key={item.id}
        className="flex md:flex-row-reverse md:text-right gap-5 items-center "
      >
        <div className="bg-orange-500 justify-center items-center text-3xl flex  text-white  p-3 rounded-full">
          {item.img}
        </div>

        <div className="flex flex-col gap-3 md:mt-15 md:mb-20 mt-5 mb-5 ">
          <h3 className="text-3xl font-bold text-zinc-700">{item.title}</h3>
          <p className="text-gray-800 font-semibold">{item.para}</p>
        </div>
      </div>
    );
  });

  // right value items
  const rightValue = Value.splice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex flex-row gap-5 items-center ">
        <div className="bg-orange-500 justify-center items-center text-3xl flex text-white  p-3 rounded-full ">
          {item.img}
        </div>

        <div className="flex flex-col gap-3 md:mt-15 md:mb-20 mt-5 mb-5 ">
          <h3 className="text-3xl font-bold text-zinc-700">{item.title}</h3>
          <p className="text-gray-800 font-semibold">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    // value section
    <section>
      <CategoryHeading highlight={"Our"} heading={"Value"} />

      <div className="grid md:grid-cols-3 grid-cols-1 items-center md:gap-8 px-10">
        <div>{leftValue}</div>
        <div className="hidden md:block">
          <img src={fruitsVeggiesImg} alt="Fruits and Veggies" />
        </div>
        <div>{rightValue}</div>
      </div>
    </section>
  );
}

export default Value;
