import ProductCard from "./ProductCard";
import { v4 as uuidv4 } from 'uuid';

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
};

const products: Product[] = [
  {
    name: "Corona classic chair",
    image: "/src/assets/images/chair1.jpg",
    price: 24.0,
  },
  {
    name: "Beat Flat Pendant Black",
    image: "/src/assets/images/chair2.jpg",
    price: 53.0,
  },
  {
    name: "Arne jacobsen egg chair",
    image: "/src/assets/images/chair3.avif",
    price: 24.0,
  },
  {
    name: "Rattan rocking chair",
    image: "/src/assets/images/chair4.avif",
    price: 24.0,
  },
  {
    name: "ELK Lighting Earthflows",
    image: "/src/assets/images/chair5.jpeg",
    price: 24.0,
    oldPrice: 35.25,
  },
  {
    name: "Wooden chair",
    image: "/src/assets/images/chair6.jpg",
    price: 24.0,
  },
  {
    name: "Lampe Sur Pieds Bamboo",
    image: "/src/assets/images/chair7.webp",
    price: 24.0,
  },
  {
    name: "Tube Chair by Joe Colombo",
    image: "/src/assets/images/chair8.webp",
    price: 24.0,
  },
].map(product => ({
  ...product,
  id: uuidv4() 
}));

const ProductGrid = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-1">TOP PRODUCTS</h2>
        <div className="flex items-center justify-center mb-8 gap-4">
          <div className="flex-1 h-px bg-orange max-w-[100px]" />
          <p className="text-sm text-center text-gray-500 whitespace-nowrap">
            THE BEST OF 2024
          </p>
          <div className="flex-1 h-px bg-orange max-w-[100px]" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="border-none bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-6 py-3 rounded shadow-md w-max
               transition-all duration-300 ease-in-out
               hover:from-yellow-800 hover:to-yellow-600 hover:text-white cursor-pointer
               focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;