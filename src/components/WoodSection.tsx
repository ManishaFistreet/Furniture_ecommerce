import hardWood from '../assets/wood-images/hard-wood.jpeg';
import sangwanWood from '../assets/wood-images/sagwan-wood.jpg';
import teakWood from '../assets/wood-images/teak-wood.jpeg'
import timberWood from '../assets/wood-images/timber-wood.jpg';
import pineWood from '../assets/wood-images/pine-wood.jpg';
import rawWood from '../assets/wood-images/raw-wood.jpeg';

const ExploreWoodsSection = () => {
  const woods = [
    { src: hardWood, alt: "Hardwood" },
    { src: sangwanWood, alt: "Sangwan" },
    { src: teakWood, alt: "Teakwood" },
    { src: timberWood, alt: "Timber" },
    { src: pineWood, alt: "Pine wood" },
    { src: rawWood, alt: "Raw Wood" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeUp">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col justify-center animate-fadeUp delay-200">
          <h2 className="text-4xl font-bold mb-4">
            EXPLORE <span className="text-yellow-700">WOODS</span>
          </h2>
          <p className="text-gray-600 mb-6 max-w-md text-base leading-relaxed">
            Discover our collection of fine wood types used in elegant furniture and robust construction:
            <br />
            <strong>Hardwood, Sangwan, Plywood, Teakwood</strong> — sourced and crafted for strength, beauty, and durability.
          </p>
          <button className="border-none bg-yellow-700 text-white px-6 py-3 rounded hover:bg-yellow-800 transition w-max">
            Browse Catalog
          </button>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {woods.map((wood, i) => (
            <img
              key={i}
              src={wood.src}
              alt={wood.alt}
              className={`h-36 object-cover w-full rounded shadow transform transition duration-300 hover:scale-105 animate-fadeUp`}
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreWoodsSection;