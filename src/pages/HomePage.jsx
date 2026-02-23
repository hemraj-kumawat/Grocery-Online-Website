import React, { useState } from "react";
import HeroSection from "../components/Hero/HeroSection";
import CategoryCards from "../components/Hero/CategoryCards";
import Value from "../components/Hero/Value";
import Products from "../components/Products/Products";
import Discount from "../components/Hero/Discount";
import Process from "../components/Hero/Process";
import Testimonials from "../components/Hero/Testimonials";

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <Value />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
    </>
  );
}

export default HomePage;
