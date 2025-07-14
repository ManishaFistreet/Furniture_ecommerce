import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaShoppingCart, FaHeart, FaUser, FaTimes } from "react-icons/fa";
import CartDrawer from "./CartDrawer";
import Furniture from "../assets/furniture/Furniture.jpg";

const categories = [
  {
    title: "LIVING",
    items: [
      "Book Shelves", "Benches", "Coffee Tables", "Console Tables", "Lounge Chairs",
      "Poufs", "Side Tables", "Sofas", "TV Units",
    ],
  },
  {
    title: "BEDROOM",
    items: ["Beds", "Bedside Tables", "Chest Of Drawers", "Floor Mirrors", "Side Boards"],
  },
  {
    title: "DINING",
    items: ["Bar Unit", "Crockery Unit", "Dining Chair", "Dining Table", "Dining Table Set"],
  },
  {
    title: "OUTDOOR",
    items: ["Dining Chair", "Dining Table", "Bench", "Stool", "Dining Table + Chairs"],
  },
  {
    title: "STUDY",
    items: ["Book Shelves", "Study Table"],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const toggleCart = () => setShowCart((prev) => !prev);

  const handleItemClick = (name: string) => {
    const route = name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/collection/${route}`);
    setShowDropdown(false);
  };

  return (
    <>
      <header className="bg-[#f5f1ed] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-dark tracking-wide"
            style={{ fontFamily: "Josefin Sans, sans-serif" }}
          >
            R<span className="text-brand">I</span> Furnish.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 relative z-50 justify-center">
            {["Home", "Furniture", "Lighting", "Decor", "Raw Wood", "Contact"].map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => item === "Furniture" && setShowDropdown(true)}
                onMouseLeave={() => item === "Furniture" && setShowDropdown(false)}
              >
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : item === "Furniture"
                      ? "#"
                      : `/collection/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="text-dark text-[16px] font-medium no-underline hover:text-brand transition duration-300"
                  style={{ fontFamily: "Josefin Sans, sans-serif" }}
                >
                  {item}
                </Link>
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 text-dark text-xl">
            <FaUser className="cursor-pointer hover:text-accent transition duration-200" />
            <FaHeart className="cursor-pointer hover:text-accent transition duration-200" />
            <FaShoppingCart
              className="cursor-pointer hover:text-accent transition duration-200"
              onClick={toggleCart}
            />
            <FaBars className="md:hidden cursor-pointer text-2xl" onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div
            className="absolute left-0 right-0 bg-white z-40 pt-4 pb-10 border-t border-gray-200 overflow-x-auto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            style={{ fontFamily: "Josefin Sans, sans-serif" }}
          >
            <div className="max-w-[1440px] mx-auto px-10 flex items-start justify-start gap-8">
              {/* Categories Row */}
              <div className="flex flex-row gap-10 w-[75%] overflow-x-auto whitespace-nowrap">
                {categories.map((category, idx) => (
                  <ul
                    key={idx}
                    className="w-[160px] inline-block whitespace-normal align-top list-none text-left space-y-1"
                  >
                    <li>
                      <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide block mb-1">
                        {category.title}
                      </span>
                    </li>
                    {category.items.map((item, subIdx) => (
                      <li key={subIdx}>
                        <span
                          onClick={() => handleItemClick(item)}
                          className="cursor-pointer block text-sm text-[#444] hover:text-orange-500 transition-colors duration-200"
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>

              {/* Side Image */}
              <div className="w-[300px] flex-shrink-0">
                <img
                  src={Furniture}
                  alt="Furniture Showcase"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            {["Home", "Furniture", "Lighting", "Decor", "Raw Wood", "Contact"].map((item, idx) => (
              <Link
                key={idx}
                to={
                  item === "Home"
                    ? "/"
                    : item === "Furniture"
                    ? "#"
                    : `/collection/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-dark text-base font-medium hover:text-brand transition"
                style={{ fontFamily: "Josefin Sans, sans-serif" }}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleCart}>
          <div
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <FaTimes className="cursor-pointer" onClick={toggleCart} />
            </div>
            <CartDrawer />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;