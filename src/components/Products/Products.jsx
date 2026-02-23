import React, { useState } from "react";
import CategoryHeading from "../Hero/CategoryHeading";
import ProductsList from "./ProductsList";
import CardItems from "./Card/CardItems";
import { Link } from "react-router-dom";

function Products() {
  // categories for the tabs
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Meat"];
  const [activeTab, setActiveTab] = useState("All");

  // filtering the products based on the active tab
  let filteredProducts =
    activeTab === "All"
      ? ProductsList
      : ProductsList.filter((product) => product.category === activeTab);

  // rendering the cards based on the filtered products
  const renderCards = filteredProducts.slice(0, 8).map((product) => {
    return (
      <CardItems
        key={product.id}
        image={product.img}
        name={product.name}
        price={product.price}
      />
    );
  });

  return (
    // products section
    <section className="mx-10">
      <CategoryHeading highlight={"Our"} heading={"Products"} />

      {/* taps */}
      <div className="flex flex-wrap gap-8 mt-10 mb-10 justify-center">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={` cursor-pointer px-5 py-2 text-lg rounded-md font-medium  transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-orange-500  hover:text-white ${activeTab === category ? "bg-orange-500 text-white" : "bg-zinc-100 text-zinc-700"} `}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Card Render */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mt-20">
        {renderCards}
      </div>

      <div className="mt-10 mb-15 mx-auto w-fit">
        <Link to="/AllProducts" className=" bg-orange-500  text-white tracking-wide mt-6 px-6 py-4 rounded-lg font-semibold hover:scale-105 hover:bg-orange-600 transition duration-300 cursor-pointer">
          View All Products
        </Link>
      </div>
    </section>
  );
}
export default Products;
