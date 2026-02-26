import React from "react";
import CategoryHeading from "../Hero/CategoryHeading";
import { SiCodefresh } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

function ChooseUs() {
  return (
    <section>
      <CategoryHeading highlight={"Why"} heading={"Choose Us"} />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3 px-10 py-10 ">
        <div className="flex flex-col gap-3 mt-8  rounded-2xl p-5 group hover:scale-105 hover:shadow-xl transition-all duration-300">
          <div className="flex gap-3">
            <SiCodefresh className="text-orange-500 text-4xl" />
            <h3 className="text-3xl text-zinc-700 font-bold">
              Fresh & Organic
            </h3>
          </div>
          <p className="text-xl font-semibold text-zinc-700 text-center">
            Sourced from trusted local farms.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-8 shadow shadow-zinc-300 rounded-2xl p-5 group hover:scale-105 hover:shadow-xl transition-all duration-300">
          <div className="flex gap-3">
            <FaShippingFast className="text-orange-500 text-4xl" />
            <h3 className="text-3xl text-zinc-700 font-bold">
              Fast & Reliable Delivery
            </h3>
          </div>
          <p className="text-xl font-semibold text-zinc-700 text-center">
            Guaranteed fresh and organic products.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-8 shadow shadow-zinc-300 rounded-2xl p-5 group hover:scale-105 hover:shadow-xl transition-all duration-300">
          <div className="flex gap-3">
            <GiPriceTag className="text-orange-500 text-4xl" />
            <h3 className="text-3xl text-zinc-700 font-bold">
              Affordable Pricing
            </h3>
          </div>
          <p className="text-xl font-semibold text-zinc-700 text-center">
            Quick, on-time delivery to your door.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-8 shadow shadow-zinc-300 rounded-2xl p-5 group hover:scale-105 hover:shadow-xl transition-all duration-300">
          <div className="flex gap-3">
            <RiSecurePaymentFill className="text-orange-500 text-4xl" />
            <h3 className="text-3xl text-zinc-700 font-bold">
              Secure Payments
            </h3>
          </div>
          <p className="text-xl font-semibold text-zinc-700 text-center">
            Safe and secure payment options for every order.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
