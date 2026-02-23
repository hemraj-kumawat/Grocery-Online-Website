import React from "react";
import CategoryPages from "../components/Category/CategoryPages";
import DairyEggs from "../assets/DairyEggImg.jpg";

function DairyAndEggsPage() {
  return (
    <div>
      <CategoryPages
        title="Dairy And Eggs"
        BannerImg={DairyEggs}
        category={["Dairy", "Eggs"]}
      />
    </div>
  );
}

export default DairyAndEggsPage;
