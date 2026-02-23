import React from "react";
import CategoryBanner from "../Category/CategoryBanner";
import ProductsList from "../Products/ProductsList";
import CardItems from "../Products/Card/CardItems";

function CategoryPages( { title , BannerImg , category=[] } ) {
 
  let filteredProducts = category.includes("All") ? ProductsList : ProductsList.filter((product) => category.includes(product.category));

  const renderCategory = filteredProducts.map((product) => {
    return (
      <CardItems key={product.id}
        image={product.img}
        name={product.name}
        price={product.price}
      />
    );
  });

  return (
    <div>
      <div>
        <CategoryBanner title={title} BannerImg = {BannerImg}/>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8 py-20  mx-10">
        {renderCategory}
      </div>
    </div>
  );
}

export default CategoryPages;
