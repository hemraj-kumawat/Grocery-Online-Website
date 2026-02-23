// ===================== Dairy =====================
import dairy01 from "../../assets/Dairy-01.webp";
import dairy02 from "../../assets/Dairy-02.png";
import dairy03 from "../../assets/Dairy-03.png";
import dairy04 from "../../assets/Dairy-04.png";

// ===================== Eggs =====================
import egg01 from "../../assets/EggImg-01.png";
import egg02 from "../../assets/EggImg-02.png";

// ===================== Fruits =====================
import fruit01 from "../../assets/FruitImg-01.png";
import fruit02 from "../../assets/FruitImg-02.png";
import fruit03 from "../../assets/FruitImg-03.png";
import fruit04 from "../../assets/FruitImg-04.png";
import fruit05 from "../../assets/FruitImg-05.png";
import fruit06 from "../../assets/FruitImg-06.png";
import fruit07 from "../../assets/FruitImg-07.png";
import fruit08 from "../../assets/FruitImg-08.png";
import fruit09 from "../../assets/FruitImg-09.png";
import fruit10 from "../../assets/FruitImg-10.png";
import fruit11 from "../../assets/FruitImg-11.png";
import fruit12 from "../../assets/FruitImg-12.png";
import fruit13 from "../../assets/FruitImg-13.png";
import fruit14 from "../../assets/FruitImg-14.png";
import fruit15 from "../../assets/FruitImg-15.png";
import fruit16 from "../../assets/FruitImg-16.png";

// ===================== Meat & Seafood =====================
import meat01 from "../../assets/Meat-01.png";
import meat02 from "../../assets/Meat-02.png";
import meat03 from "../../assets/Meat-03.png";
import meat04 from "../../assets/Meat-04.png";
import meat05 from "../../assets/Meat-05.png";
import meat06 from "../../assets/Meat-06.webp";

// ===================== Vegetables =====================
import veg01 from "../../assets/VegImg-01.png";
import veg02 from "../../assets/VegImg-02.png";
import veg03 from "../../assets/VegImg-03.png";
import veg04 from "../../assets/VegImg-04.png";
import veg05 from "../../assets/VegImg-05.png";
import veg06 from "../../assets/VegImg-06.png";
import veg07 from "../../assets/VegImg-07.png";
import veg08 from "../../assets/VegImg-08.png";
import veg09 from "../../assets/VegImg-09.png";
import veg10 from "../../assets/VegImg-10.png";
import veg11 from "../../assets/VegImg-11.png";
import veg12 from "../../assets/VegImg-12.png";

// ===================== PRODUCTS ARRAY =====================
const products = [
  // Dairy
  { id: 1, name: "Fresh Milk", category: "Dairy", price: 3.0, img: dairy01 },
  { id: 2, name: "Paneer", category: "Dairy", price: 4.0, img: dairy02 },
  { id: 3, name: "Milk", category: "Dairy", price: 3.0, img: dairy03 },
  { id: 4, name: "Cream", category: "Dairy", price: 3.5, img: dairy04 },

  // Eggs
  { id: 5, name: "Eggs (Brown)", category: "Eggs", price: 2.2, img: egg01 },
  { id: 6, name: "Eggs (White)", category: "Eggs", price: 2.0, img: egg02 },

  // Fruits
  { id: 7, name: "Banana", category: "Fruits", price: 1.2, img: fruit01 },
  { id: 8, name: "Banana Basket", category: "Fruits", price: 2.0, img: fruit02 },
  { id: 9, name: "Apple", category: "Fruits", price: 2.4, img: fruit03 },
  { id: 10, name: "Green Apple", category: "Fruits", price: 2.2, img: fruit04 },
  { id: 11, name: "Green Grapes", category: "Fruits", price: 2.5, img: fruit05 },
  { id: 12, name: "Black Grapes", category: "Fruits", price: 3.0, img: fruit06 },
  { id: 13, name: "Mango", category: "Fruits", price: 3.5, img: fruit07 },
  { id: 14, name: "Guava", category: "Fruits", price: 2.3, img: fruit08 },
  { id: 15, name: "Cherry", category: "Fruits", price: 1.6, img: fruit09 },
  { id: 16, name: "Watermelon", category: "Fruits", price: 1.6, img: fruit10 },
  { id: 17, name: "Papaya", category: "Fruits", price: 2.1, img: fruit11 },
  { id: 18, name: "Pineapple", category: "Fruits", price: 2.8, img: fruit12 },
  { id: 19, name: "Kiwi", category: "Fruits", price: 3.2, img: fruit13 },
  { id: 20, name: "Dates", category: "Fruits", price: 2.9, img: fruit14 },
  { id: 21, name: "Strawberry", category: "Fruits", price: 3.4, img: fruit15 },
  { id: 22, name: "Tender Coconut", category: "Fruits", price: 2.6, img: fruit16 },

  // Meat & Seafood
  { id: 22, name: "Chicken", category: "Meat", price: 5.0, img: meat01 },
  { id: 23, name: "Pork", category: "Meat", price: 5.5, img: meat02 },
  { id: 24, name: "Fish Fillet", category: "Seafood", price: 6.5, img: meat03 },
  { id: 25, name: "Prawns", category: "Seafood", price: 7.0, img: meat04 },
  { id: 26, name: "Tuna Fish", category: "Seafood", price: 9.5, img: meat05 },
  { id: 27, name: "Lobster", category: "Seafood", price: 4.5, img: meat06 },

  // Vegetables
  { id: 28, name: "Tomato", category: "Vegetables", price: 1.2, img: veg01 },
  { id: 29, name: "Potato", category: "Vegetables", price: 1.0, img: veg02 },
  { id: 30, name: "Onion", category: "Vegetables", price: 1.1, img: veg03 },
  { id: 31, name: "Mixed Vegetables", category: "Vegetables", price: 2.0, img: veg04 },
  { id: 32, name: "Carrot", category: "Vegetables", price: 1.4, img: veg05 },
  { id: 33, name: "Mushroom", category: "Vegetables", price: 2.8, img: veg06 },
  { id: 34, name: "Lady Finger", category: "Vegetables", price: 1.6, img: veg07 },
  { id: 35, name: "Green Chili", category: "Vegetables", price: 1.9, img: veg08 },
  { id: 36, name: "Broccoli", category: "Vegetables", price: 2.6, img: veg09 },
  { id: 37, name: "Ginger", category: "Vegetables", price: 1.3, img: veg10 },
  { id: 38, name: "Peas", category: "Vegetables", price: 2.0, img: veg11 },
  { id: 39, name: "Cauliflower", category: "Vegetables", price: 2.4, img: veg12 },
];

export default products;