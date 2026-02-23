import React from "react";

// Reusable button component with customizable content and styling
function Button({ content }) {
  return (
    <button className="bg-orange-500  text-white tracking-wide mt-6 px-5 py-3 rounded-lg font-semibold hover:scale-105 hover:bg-orange-600 transition duration-300 cursor-pointer">
      {content}
    </button>
  );
}

export default Button;
