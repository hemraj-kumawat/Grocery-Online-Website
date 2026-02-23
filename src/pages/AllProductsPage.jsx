import React from "react";
import CategoryPages from "../components/Category/CategoryPages"
import AllProduct from "../assets/GroceryAll.avif";

function AllProductsPage() {
  return (
    <div>
      <CategoryPages
        title="All Products"
        BannerImg={AllProduct}
        category={["All"]}
      />
    </div>
  );
}

export default AllProductsPage;
