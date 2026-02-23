import React, { useEffect ,useState, useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Button from "../../Button/Button"
import { GiCheckMark } from "react-icons/gi";
import { CartContext } from "../../Context/CartContext";


// Component for displaying individual card items with image, name, price, and action buttons
function CardItems({ image, name, price }) {
  const [showToast, setShowToast] = useState(false);
  const {addToCart} = useContext(CartContext);
 
  const handleAddToCart = () => {
    // Show the toast notification
    setShowToast(true);

    // Hide the toast after 1 second
    setTimeout(() => {
      setShowToast(false);
    }, 1000);


  };
  


  return (
    <div className=" p-4 group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Card Icons */}
      <div className="flex justify-between items-center group">
        <span className="text-3xl text-zinc-300">
          <FaHeart />
        </span>
        <button
          onClick={()=>{handleAddToCart(),addToCart()}}
          title="Add to Cart"
          className=" bg-orange-300 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-amber-500"
        >
         {showToast ? <GiCheckMark className="text-xl text-white" /> : <GoPlus className=" text-xl text-white" /> }
        </button>
        {showToast && (
          <div className="fixed flex gap-2 font-semibold  items-center top-24 right-6  bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
            <GiCheckMark className="text-xl" /> Added to cart
          </div>
        )}
      </div>

      {/* Card Image */}
      <div className="W-full h-50">
        <img
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          src={image}
          alt="Product Image"
        />
      </div>

      {/* Card Details */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-2xl font-bold mt-2 mb-1">${price.toFixed(2)}</p>
        <Button content={"Buy Now"} />
      </div>
    </div>
  );
}

export default CardItems;
