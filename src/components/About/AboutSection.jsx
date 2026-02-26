import React from "react";
import heroImg from "../../assets/HeroSection.png";

function AboutSection() {
  return (
    <section className="px-10 pt-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center ">
        <div className="">
          <h1 className="md:text-7xl text-4xl text-zinc-800 leading-tight font-bold mt-4">
            About
            <br />
            Gr<span className="text-orange-500 uppercase">o</span>cery Online
          </h1>
          <p className="text-lg text-zinc-600 mt-4 font-medium">
            Delivering fresh, organic, and quality groceries directly to your
            doorstep.
          </p>
        </div>
        {/* img section */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Fresh Fruits Basket"
            className="w-full max-w-[480px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
