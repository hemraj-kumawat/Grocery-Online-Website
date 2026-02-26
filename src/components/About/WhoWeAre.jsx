import React from "react";
import CategoryHeading from "../Hero/CategoryHeading";
import About01 from "../../assets/About-01.png";
import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";

function WhoWeAre() {
  return (
    <section>
      <CategoryHeading highlight={"Who"} heading={"We Are"} />
      <div className="grid md:grid-cols-2 grid-cols-1 py-10 gap-10 px-10 items-center">
        <div>
          <img
            src={About01}
            alt="Who we are"
            className="w-full max-w-[480px] h-auto rounded-2xl shadow-2xl shadow-zinc-400"
          />
        </div>

        <div>
          <h3 className="text-zinc-700 font-bold text-4xl">Who We Are</h3>
          <p className="text-lg text-zinc-600 mt-4 font-semibold">
            Grocery Online is a modern online grocery platform focused on
            providing fresh fruits, vegetables, dairy, and daily essentials
            sourced directly from trusted farmers and suppliers.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-14 px-5 pt-10">
            <div className="flex justify-center flex-col items-center text-center rounded-2xl shadow shadow-zinc-400 p-5 group hover:scale-105 hover:shadow-xl transition-all duration-300">
              <GoGoal className="text-5xl text-orange-500 mb-5"/>
              <h3 className="text-zinc-700 font-bold mb-3 text-2xl">Our Mission</h3>
              <p className="text-lg text-zinc-600 font-semibold">
                To make healthy, fresh groceries affordable and accessible for
                everyone.
              </p>
            </div>
            <div className="flex justify-center flex-col items-center text-center rounded-2xl shadow shadow-zinc-400 p-5 group hover:scale-105 hover:shadow-xl transition-all duration-300">
              <FaEye className="text-5xl text-orange-500 mb-5"/>
              <h3 className="text-zinc-700 font-bold mb-3 text-2xl">Our Vision</h3>
              <p className="text-lg text-zinc-600 font-semibold">
                To become the most trusted online grocery platform in every
                city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
