import React from "react";
import CategoryPages from "../components/Category/CategoryPages";
import FruitsAndVegetables from "../assets/FruitAndVegetables.png";

function FruitsAndVeggies() {
  return (
    <div>
      <CategoryPages
        title="Fruits And Veggies"
        BannerImg={FruitsAndVegetables}
        category={["Fruits", "Vegetables"]}
      />
    </div>
  );
}

export default FruitsAndVeggies;
