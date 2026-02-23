import React, { useEffect, useState, useContext } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { cartCount } = useContext(CartContext);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Process", path: "/" },
    { name: "Contact", path: "/" },
  ];

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMenu]);

  return (
    <header>
      {/* NAVBAR */}
      <nav className="fixed left-0 top-0 w-full h-14 md:h-16 bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-between px-6 md:px-10 z-50">
        {/* Logo */}
        <Link
          to="/"
          className="text-zinc-700 font-bold md:text-3xl text-2xl tracking-wide"
        >
          Gr<span className="text-orange-500 uppercase">o</span>cery Online
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-8 text-zinc-600 font-semibold text-lg">
          {menu.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer hover:scale-110 hover:text-orange-500 transition-all duration-300"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-x-4">
          {/* Search Desktop */}
          <div className="hidden md:flex border-2 border-orange-400 px-2 py-1 rounded-full">
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none px-2 w-36 font-medium"
            />
            <button className="bg-orange-400 p-2 rounded-full text-white">
              <IoSearch />
            </button>
          </div>

          {/* Icons */}
          <button className="text-zinc-800 text-3xl hover:text-orange-500 transition">
            <GoHeartFill />
          </button>

          <button className="relative text-zinc-800 text-3xl hover:text-orange-500 transition">
            <HiShoppingBag />
            <span className="absolute -top-1 -right-2 text-xs bg-orange-500 text-white rounded-full px-1">
              {cartCount}
            </span>
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl text-zinc-700"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowMenu(false)}
      />

      {/* Mobile Menu */}
      <ul
        className={`fixed top-14 right-0 w-[75%] max-w-[320px] h-[calc(100vh-3.5rem)] bg-white shadow-xl z-50 flex flex-col gap-y-8 px-8 py-10 text-zinc-700 font-semibold text-lg transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              onClick={() => setShowMenu(false)}
              className="hover:text-orange-500 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* Search Mobile */}
        <li className="mb-auto flex border-2 border-orange-400 px-3 py-2 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none px-2 w-full"
          />
          <button className="bg-orange-400 p-2 rounded-full text-white">
            <IoSearch />
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
