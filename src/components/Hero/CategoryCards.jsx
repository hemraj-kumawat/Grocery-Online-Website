import React from "react";
import CategoryHeading from "./CategoryHeading";
import fruitsVeggiesImg from "../../assets/FruitCard.png";
import meatSeafoodImg from "../../assets/MeatSeaFood.png";
import dairyEggsImg from "../../assets/category-dairy.png";
import { Link } from "react-router-dom";

// Component for displaying category cards with images, titles, descriptions, and a button
function CategoryCards() {
  const categories = [
    {
      title: "Fruits & Veggies",
      desc: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
      img: fruitsVeggiesImg,
      path: "/FruitsAndVeggies",
    },
    {
      title: "Meat & SeaFood",
      desc: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
      img: meatSeafoodImg,
      path: "/MeatAndSeaFood",
    },
    {
      title: "Dairy & Eggs",
      desc: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
      img: dairyEggsImg,
      path: "/DairyAndEggs",
    },
  ];

  // Render category cards with images, titles, descriptions, and a button
  return (
    <section className="py-10 px-6 md:px-10 lg:px-16">
      {/* Heading */}
      <div className="mb-20">
        <CategoryHeading highlight="Shop" heading="Our Categories" />
      </div>

      {/* Render category cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-60 h-60 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
            />

            <h3 className="text-xl font-semibold text-zinc-800">
              {item.title}
            </h3>

            <p className="text-zinc-500 mt-2">{item.desc}</p>

            <Link
              to={item.path}
              className=" bg-orange-500  text-white tracking-wide mt-6 px-5 py-2 rounded-lg font-semibold hover:scale-105 hover:bg-orange-600 transition duration-300 cursor-pointer"
            >
              See All
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryCards;
