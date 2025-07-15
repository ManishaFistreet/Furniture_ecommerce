import { useState, useEffect } from "react";
import hex1 from "../assets/images/footer/hex1.jpg";
import hex2 from "../assets/images/footer/hex2.jpg";
import hex3 from "../assets/images/footer/hex3.webp";
import arrow from "../assets/images/footer/circled-up.svg"
const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#f7f7f7] text-gray-800 pt-12 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-15">
        {/* Section 1: Logo & Services */}
        <div className="space-y-4">
          <div className="text-3xl font-bold text-gray-900">
            R<span className="text-black">I</span>
          </div>
          <p className="text-sm uppercase tracking-wider text-gray-600">
            Furniture • Home Renovation
          </p>
          <p className="text-sm uppercase tracking-wider text-gray-600">
            Interior Design • Wooden • Doors • Flooring
          </p>
        </div>

        {/* Section 2: Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-red-600">Radhika Industries</h3>
          <p className="text-sm text-gray-700">
            3, Near Reliance Petrol Pump, Pal,<br />
            Jodhpur - 342 014 (Raj.)
          </p>
          <p className="text-sm text-gray-700">
            ✉️{" "}
            <a
              href="mailto:shitesh477@gmail.com"
              className="text-blue-600 hover:underline"
            >
              shitesh477@gmail.com
            </a>
          </p>
        </div>

        {/* Section 3: Hexagon Images */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-red-600">
            Explore Our Collections
          </h3>
          <p className="text-sm text-gray-600">
            Discover our range of handcrafted furniture and decor.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <HexImage src={hex1} />
            <HexImage src={hex2} />
            <HexImage src={hex3} />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4 pb-4">
        © {new Date().getFullYear()} Radhika Industries. All rights reserved.
      </div>

      {/* Scroll to top button */}
      {showScroll && (
       <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2 rounded-full transition-all duration-300 focus:outline-none border-none z-50 bg-transparent hover:bg-gray-100/30"
          aria-label="Scroll to top"
        >
          <img 
            src={arrow} 
            alt="Scroll to top" 
            className="w-12 h-12 border-none" 
          />
        </button>
      )}
    </footer>
  );
};

const HexImage = ({ src }: { src: string }) => {
  return (
    <div className="w-24 h-24 clip-hexagon overflow-hidden shadow-md">
      <img src={src} alt="hex" className="w-full h-full object-cover" />
    </div>
  );
};

export default Footer;