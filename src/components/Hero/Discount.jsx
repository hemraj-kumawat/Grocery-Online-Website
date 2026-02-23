import React from "react";
import Button from "../Button/Button";
import FruitBanner from "../../assets/FruitBanner.png";

function Discount() {
  return (
    // discount section
    <section
      className="bg-zinc-100 bg-right bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${FruitBanner})` }}
    >
      <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col mb-10 px-10 py-10">
        <span className="md:text-8xl text-5xl text-orange-500 font-bold transform md:-rotate-90 md:self-center">
          20%
        </span>
        <div>
          <h3 className="md:text-7xl text-4xl text-zinc-700 font-bold">
            Discount For <br /> Your First Order
          </h3>
          <p className="text-zinc-500 my-6">
            Get 20% off on your first order. Limited time offer!
          </p>
          <Button content="Order Now" />
        </div>
      </div>
    </section>
  );
}

export default Discount;
