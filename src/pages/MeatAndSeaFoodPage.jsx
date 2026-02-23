import React from "react";
import CategoryPages from "../components/Category/CategoryPages";
import MeatAndSeafood from "../assets/MeatAndSeafood.jpg";

function MeatAndSeaFood() {
  return (
    <div>
      <CategoryPages
        title="Meat And SeaFood"
        BannerImg={MeatAndSeafood}
        category={["Meat", "Seafood"]}
      />
    </div>
  );
}

export default MeatAndSeaFood;
