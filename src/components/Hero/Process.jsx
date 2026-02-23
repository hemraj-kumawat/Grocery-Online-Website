import React from "react";
import CategoryHeading from "./CategoryHeading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiPlant } from "react-icons/pi";
import { PiFactoryLight } from "react-icons/pi";
import { HiBadgeCheck } from "react-icons/hi";
import { FaTruck } from "react-icons/fa";

function Process() {
  // Data for the process steps, including icons, titles, and descriptions
  const process = [
    {
      id: 1,
      number: <TbCircleNumber1Filled />,
      title: "Sourcing",
      para: "Fresh products sourced from trusted local suppliers.",
      icon: <PiPlant />,
    },
    {
      id: 2,
      number: <TbCircleNumber2Filled />,
      title: "Manufacturing",
      para: "Manufactured with strict hygiene and quality standards.",
      icon: <PiFactoryLight />,
    },
    {
      id: 3,
      number: <TbCircleNumber3Filled />,
      title: "Quality Control",
      para: "Each product is carefully checked to meet quality standards.",
      icon: <HiBadgeCheck />,
    },
    {
      id: 4,
      number: <TbCircleNumber4Filled />,
      title: "Logistics",
      para: "Fast and reliable delivery to your doorstep.",
      icon: <FaTruck />,
    },
  ];

  const renderProcess = process.map((item) => {
    return (
      // Render each process step with its corresponding number, icon, title, and description
      <div
        key={item.id}
        className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? "md:-mt-100" : ""}`}
      >
        <span className="flex justify-center items-center rounded-full w-18 h-18 text-8xl text-white bg-zinc-800 outline-[3px] outline-offset-8 outline-zinc-800 outline-dashed mx-auto ">
          {item.number}
        </span>
        <div className="flex items-center mt-10 gap-x-5 ">
          <span className="flex justify-center  items-center bg-orange-500 text-white p-2 rounded-full text-3xl transform-all duration-300 hover:scale-110">
            {item.icon}
          </span>
          <div>
            <h4 className="text-zinc-600 text-2xl font-bold">{item.title}</h4>
            <p className="text-zinc-500 mt-2 font-semibold">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    // Render the process section with a heading and the list of process steps
    <section>
      <div className="mx-10">
        <div className="w-fit">
          <CategoryHeading highlight={"Our"} heading={"Process"} />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-y-16 md:mt-20 mt-10 mb-20 items-center justify-center gap-x-8  md:pt-50">
          {renderProcess}
        </div>
      </div>
    </section>
  );
}

export default Process;
