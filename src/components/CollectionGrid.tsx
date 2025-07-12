// src/components/CollectionGrid.tsx
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import outdoorImg from "../assets/images/bed-design1.jpg";
import sofaImg from "../assets/images/sofa-chair-2.jpg";
import trendyImg from "../assets/images/mid-century-interior-design.jpg";
import cabinet from "../assets/images/chair-cabinet.jpg";


const collections = [
  {
    title: "Bed Designs",
    subtitle: "Collection 2025",
    image: outdoorImg,
    link: "/products/outdoor",
  },
  {
    title: "Sofa Design",
    subtitle: "Collection 2025",
    image: sofaImg,
    link: "/products/sofas",
  },
  {
    title: "Top Trendy",
    subtitle: "Collection 2025",
    image: trendyImg,
    link: "/products/trendy",
  },
  {
    title: "Stylish Cabinets",
    subtitle: "Collection 2025",
    image: cabinet,
    link: "/products/trendy",
  },
  //   {
  //     title: "Top Trendy",
  //     subtitle: "Collection 2024",
  //     image: trendyImg,
  //     link: "/products/trendy",
  //   },
];

const CollectionGrid = () => {
  const navigate = useNavigate();
  const randomized = useMemo(
    () =>
      collections.map((item) => ({
        ...item,
      })),
    []
  );

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {randomized.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(item.link)}
          className="relative group cursor-pointer rounded overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-3 text-white">
            <h2 className="text-xl font-bold md:text-2xl">{item.title}</h2>
            <p className="text-sm">{item.subtitle}</p>
            <span className="border-b text-sm">View Details →</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CollectionGrid;