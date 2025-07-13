import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import wooden from "../assets/book-shelf/wooden book-shelf.jpg"
import modern from "../assets/book-shelf/modern.jpg"
import bench1 from "../assets/benches/bench1.jpg"
import bench2 from "../assets/benches/bench-2.jpg"
import bench3 from "../assets/benches/bench-3.jpg"
import bench4 from "../assets/benches/bench-4.jpg"
import bench5 from "../assets/benches/bench-5.webp"
import ct1 from "../assets/coffee-table/cofee-table1.jfif"
import ct2 from "../assets/coffee-table/cofee-table2.jpg"
import ct3 from "../assets/coffee-table/coffee-table3.jfif"
import ct4 from "../assets/coffee-table/coffee-table4.jpg"
import ct5 from "../assets/coffee-table/coffee-table5.jpg"
import console1 from "../assets/console-table/console1.jpg"
import console2 from "../assets/console-table/console2.jpg"
import console3 from "../assets/console-table/console3.jpg"
import console4 from "../assets/console-table/console4.jpg"
import console5 from "../assets/console-table/console5.jpg"
import lg1 from "../assets/lounge-chair/lg1.jpg"
import lg2 from "../assets/lounge-chair/lg2.jpg"
import lg3 from "../assets/lounge-chair/lg3.jpg"
import lg4 from "../assets/lounge-chair/lg4.jpg"
import lg5 from "../assets/lounge-chair/lg5.jpg"
import pf1 from "../assets/pouf/pf1.jpg"
import pf2 from "../assets/pouf/pf2.jpg"
import pf3 from "../assets/pouf/pf3.jpg"
import pf4 from "../assets/pouf/pf4.jpg"
import pf5 from "../assets/pouf/pf5.jpg"
import st1 from "../assets/side-table/st1.jpg"
import st2 from "../assets/side-table/st2.jpg"
import st3 from "../assets/side-table/st3.jpg"
import st4 from "../assets/side-table/st4.jpg"
import st5 from "../assets/side-table/st5.png"
import sofa1 from "../assets/sofa/sofa1.png"
import sofa2 from "../assets/sofa/sofa2.png"
import tv1 from "../assets/tv-cabinet/tv1.jpg"


const allProducts: Record<string, {
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
}[]> = {
  "book-shelves": [
    {
      name: "Modern Book Shelf",
      image: modern,
      price: 4999,
      
    },
    {
      name: "Wooden Book Rack",
      image: wooden,
      price: 3499,
    },
  ],
  "sofas": [
    {
      name: "Luxe Sofa Set",
      image: sofa1,
      price: 15999,
      oldPrice: 18999,
    },
    {
      name: "Fabric Recliner",
      image: sofa2,
      price: 9999,
    },
  ],
  "dining-table": [
    {
      name: "Classic Dining Table",
      image: "/images/dining1.jpg",
      price: 8999,
    },
  ],
  "tv-units": [
    {
      name: "TV Cabinet Premium",
      image: tv1,
      price: 5499,
    },
  ],
  "study-table": [
    {
      name: "Compact Study Table",
      image: "/images/studytable1.jpg",
      price: 2999,
    },
  ],
  "benches":[
    {
      name: "Classic Wooden Bench",
      image: bench1,
      price: 1999,
    },
    {
         name: "Modern Bench",
      image: bench2,
      price: 999,
    },
     {
         name: "Vintage Bench",
      image: bench3,
      price: 3999,
    },
      {
         name: "Urban Wooden Bench",
      image: bench4,
      price: 4999,
    },
      {
         name: "Kaba Upholestered Bench",
      image: bench5,
      price: 5999,
    }
  ],
 "coffee-tables": [
    {
  name: "Rustic Charm Coffee Table",
      image:ct1,
      price: 7999,
    },
     {
  name: "Arvo Round Center Table",
      image: ct2,
      price: 9999,
    },
     {
  name: "Halo Oval Table",
      image: ct3,
      price: 6999,
    },
     {
  name: "Reclaimed Timber Table",
      image: ct4,
      price: 8999,
    },
     {
  name: "UrbanNest Coffee Table",
      image: ct5,
      price: 10999,
    }
  ],
  "console-tables":[
     {
  name: "Nova Slim Console",
      image:console1,
      price: 7999,
    },
     {
  name: "Driftwood Console Table",
      image: console2,
      price: 9999,
    },
     {
  name: "Woodcraft Console",
      image: console3,
      price: 6999,
    },
     {
  name: "Rustic Grove Console",
      image: console4,
      price: 9999,
    },
     {
  name: "Vintage Console",
      image: console5,
      price: 12999,
    }
  ],
    "lounge-chairs":[
     {
  name: "TimberNest Lounge Chair",
      image:lg1,
      price: 7999,
    },
     {
  name: "RusticCharm Armchair",
      image: lg2,
      price: 9999,
    },
     {
  name: "Woodcraft Lounge Chair",
      image: lg3,
      price: 6999,
    },
     {
  name: "Halo Mid-Century Chair",
      image: lg4,
      price: 9999,
    },
     {
  name: "Vintage Lounge Chair",
      image: lg5,
      price: 12999,
    }
  ],
   "poufs":[
     {
  name: "TimberNest Pouf",
      image:pf1,
      price: 7999,
    },
     {
  name: "RusticCharm Pouf",
      image: pf2,
      price: 9999,
    },
     {
  name: "Woodcraft Lounge Pouf",
      image: pf3,
      price: 6999,
    },
     {
  name: "Halo Mid-Century Pouf",
      image: pf4,
      price: 9999,
    },
     {
  name: "Vintage Lounge Pouf",
      image: pf5,
      price: 12999,
    }
  ],
   "side-tables":[
     {
  name: "TimberNest Side-Table",
      image:st1,
      price: 7999,
    },
     {
  name: "RusticCharm Side-Table",
      image: st2,
      price: 9999,
    },
     {
  name: "Woodcraft Lounge Side-Table",
      image: st3,
      price: 6999,
    },
     {
  name: "Halo Mid-Century Side-Table",
      image: st4,
      price: 9999,
    },
     {
  name: "Vintage Lounge Side-Table",
      image: st5,
      price: 12999,
    }
  ]
};

const Collection = () => {
  const { name } = useParams();
  const categoryKey = name?.toLowerCase() || "";

  const products =
    categoryKey === "all"
      ? Object.values(allProducts).flat()
      : allProducts[categoryKey] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {name?.replace(/-/g, " ")}
      </h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
             name={product.name}
              image={product.image}
              price={product.price}
              oldPrice={product.oldPrice}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found in this category.</p>
      )}
    </div>
  );
};

export default Collection;
