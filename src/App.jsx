import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/HomePage";
import FruitsAndVeggies from "./pages/FruitsAndVeggiesPage";
import MeatAndSeaFood from "./pages/MeatAndSeaFoodPage";
import DairyAndEggs from "./pages/DairyAndEggsPage";
import AllProducts from "./pages/AllProductsPage";
import PageLayout from "./pages/PageLayout";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "FruitsAndVeggies",
          element: <FruitsAndVeggies />,
        },
        {
          path: "MeatAndSeaFood",
          element: <MeatAndSeaFood />,
        },
        {
          path: "DairyAndEggs",
          element: <DairyAndEggs />,
        },
        {
          path: "AllProducts",
          element: <AllProducts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;