import React from "react";

// Component for category heading with highlighted text and underline
function CategoryHeading({ highlight, heading }) {
  return (
    <section>
      <div className="md:py-10 py-5">
        <div className="mx-auto w-fit">
          <h1 className="md:text-5xl text-3xl font-bold">
            <span className="text-orange-500">{highlight}</span> {heading}
          </h1>
          <div className="md:w-35 w-25 md:h-1 h-0.5 bg-orange-400 md:mt-5 mt-2 ml-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default CategoryHeading;
