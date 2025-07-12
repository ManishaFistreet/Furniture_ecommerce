// src/components/Navbar.tsx
import { useState } from "react";
import { FaBars, FaShoppingCart, FaHeart, FaUser, FaTimes } from "react-icons/fa";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const toggleCart = () => setShowCart((prev) => !prev);

    return (
        <>
            <header className="bg-light shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-dark tracking-wide font-heading">
                        R<span className="text-brand">I</span> Furnish.
                    </h1>

                    {/* Nav links */}
                    <nav className="hidden md:flex gap-6">
                        {["Home", "Furniture", "Lighting", "Decor", "Raw Wood", "Contact"].map((item, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="text-dark text-base font-medium no-underline hover:text-brand transition duration-300"
                            >
                                {item}
                            </a>
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

                {/* Mobile Nav */}
                {menuOpen && (
                    <div className="md:hidden px-4 pb-4">
                        {["Home", "Furniture", "Lighting", "Decor", "Raw Wood", "Contact"].map((item, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="block py-2 text-dark text-base font-medium hover:text-brand transition"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </header>

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