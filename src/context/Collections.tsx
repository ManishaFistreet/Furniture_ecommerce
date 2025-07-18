import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
// import WarningRoundIcon from '@rsuite/icons/WarningRound';

// --- Assets ---
import wooden from "../assets/book-shelf/wooden book-shelf.jpg";
import modern from "../assets/book-shelf/modern.jpg";
import bench1 from "../assets/benches/bench1.jpg";
import bench2 from "../assets/benches/bench-2.jpg";
import bench3 from "../assets/benches/bench-3.jpg";
import bench4 from "../assets/benches/bench-4.jpg";
import bench5 from "../assets/benches/bench-5.webp";
import ct1 from "../assets/coffee-table/cofee-table1.jfif";
import ct2 from "../assets/coffee-table/cofee-table2.jpg";
import ct3 from "../assets/coffee-table/coffee-table3.jfif";
import ct4 from "../assets/coffee-table/coffee-table4.jpg";
import ct5 from "../assets/coffee-table/coffee-table5.jpg";
import console1 from "../assets/console-table/console1.jpg";
import console2 from "../assets/console-table/console2.jpg";
import console3 from "../assets/console-table/console3.jpg";
import console4 from "../assets/console-table/console4.jpg";
import console5 from "../assets/console-table/console5.jpg";
import lg1 from "../assets/lounge-chair/lg1.jpg";
import lg2 from "../assets/lounge-chair/lg2.jpg";
import lg3 from "../assets/lounge-chair/lg3.jpg";
import lg4 from "../assets/lounge-chair/lg4.jpg";
import lg5 from "../assets/lounge-chair/lg5.jpg";
import pf1 from "../assets/pouf/pf1.jpg";
import pf2 from "../assets/pouf/pf2.jpg";
import pf3 from "../assets/pouf/pf3.jpg";
import pf4 from "../assets/pouf/pf4.jpg";
import pf5 from "../assets/pouf/pf5.jpg";
import st1 from "../assets/side-table/st1.jpg";
import st2 from "../assets/side-table/st2.jpg";
import st3 from "../assets/side-table/st3.jpg";
import st4 from "../assets/side-table/st4.jpg";
import st5 from "../assets/side-table/st5.png";
import sofa1 from "../assets/sofa/sofa1.png";
import sofa2 from "../assets/sofa/sofa2.png";
import tv1 from "../assets/tv-cabinet/tv1.jpg";
import { FiFilter, FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

// --- Types ---
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  category: string;
  createdAt?: string;
}

// --- UUID Utility ---
const withIds = (items: Omit<Product, "id">[]): Product[] =>
  items.map(item => ({
    ...item,
    id: uuidv4(),
    category: item.category || "furniture",
    createdAt: item.createdAt || new Date().toISOString()
  }));

// --- Product Catalog ---
const allProducts: Record<string, Product[]> = {
  "book-shelves": withIds([
    { name: "Modern Book Shelf", image: modern, price: 4999, category: "bookshelf" },
    { name: "Wooden Book Rack", image: wooden, price: 3499, category: "bookshelf" },
  ]),
  "sofas": withIds([
    { name: "Luxe Sofa Set", image: sofa1, price: 15999, oldPrice: 18999, category: "sofa" },
    { name: "Fabric Recliner", image: sofa2, price: 9999, category: "sofa" },
  ]),
  "dining-table": withIds([
    { name: "Classic Dining Table", image: "/images/dining1.jpg", price: 8999, category: "dining" },
  ]),
  "tv-units": withIds([
    { name: "TV Cabinet Premium", image: tv1, price: 5499, category: "tv-unit" },
  ]),
  "study-table": withIds([
    { name: "Compact Study Table", image: "/images/studytable1.jpg", price: 2999, category: "study" },
  ]),
  "benches": withIds([
    { name: "Classic Wooden Bench", image: bench1, price: 1999, category: "bench" },
    { name: "Modern Bench", image: bench2, price: 999, category: "bench" },
    { name: "Vintage Bench", image: bench3, price: 3999, category: "bench" },
    { name: "Urban Wooden Bench", image: bench4, price: 4999, category: "bench" },
    { name: "Kaba Upholestered Bench", image: bench5, price: 5999, category: "bench" },
  ]),
  "coffee-tables": withIds([
    { name: "Rustic Charm Coffee Table", image: ct1, price: 7999, category: "coffee-table" },
    { name: "Arvo Round Center Table", image: ct2, price: 9999, category: "coffee-table" },
    { name: "Halo Oval Table", image: ct3, price: 6999, category: "coffee-table" },
    { name: "Reclaimed Timber Table", image: ct4, price: 8999, category: "coffee-table" },
    { name: "UrbanNest Coffee Table", image: ct5, price: 10999, category: "coffee-table" },
  ]),
  "console-tables": withIds([
    { name: "Nova Slim Console", image: console1, price: 7999, category: "console" },
    { name: "Driftwood Console Table", image: console2, price: 9999, category: "console" },
    { name: "Woodcraft Console", image: console3, price: 6999, category: "console" },
    { name: "Rustic Grove Console", image: console4, price: 9999, category: "console" },
    { name: "Vintage Console", image: console5, price: 12999, category: "console" },
  ]),
  "lounge-chairs": withIds([
    { name: "TimberNest Lounge Chair", image: lg1, price: 7999, category: "chair" },
    { name: "RusticCharm Armchair", image: lg2, price: 9999, category: "chair" },
    { name: "Woodcraft Lounge Chair", image: lg3, price: 6999, category: "chair" },
    { name: "Halo Mid-Century Chair", image: lg4, price: 9999, category: "chair" },
    { name: "Vintage Lounge Chair", image: lg5, price: 12999, category: "chair" },
  ]),
  "poufs": withIds([
    { name: "TimberNest Pouf", image: pf1, price: 7999, category: "pouf" },
    { name: "RusticCharm Pouf", image: pf2, price: 9999, category: "pouf" },
    { name: "Woodcraft Lounge Pouf", image: pf3, price: 6999, category: "pouf" },
    { name: "Halo Mid-Century Pouf", image: pf4, price: 9999, category: "pouf" },
    { name: "Vintage Lounge Pouf", image: pf5, price: 12999, category: "pouf" },
  ]),
  "side-tables": withIds([
    { name: "TimberNest Side-Table", image: st1, price: 7999, category: "side-table" },
    { name: "RusticCharm Side-Table", image: st2, price: 9999, category: "side-table" },
    { name: "Woodcraft Lounge Side-Table", image: st3, price: 6999, category: "side-table" },
    { name: "Halo Mid-Century Side-Table", image: st4, price: 9999, category: "side-table" },
    { name: "Vintage Lounge Side-Table", image: st5, price: 12999, category: "side-table" },
  ]),
};

const Collection = () => {
  const { name } = useParams<{ name?: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    sort: ''
  });

  const currentProducts = name ? allProducts[name] || [] :
    Object.values(allProducts).flat();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filterType: 'category' | 'price' | 'sort', value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredProducts = currentProducts.filter(product => {

    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = !filters.category || product.category === filters.category;

    let matchesPrice = true;
    if (filters.price) {
      const [min, max] = filters.price.split('-');
      if (max) {
        matchesPrice = product.price >= Number(min) && product.price <= Number(max);
      } else {
        matchesPrice = product.price >= Number(min);
      }
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sort === 'price-asc') return a.price - b.price;
    if (filters.sort === 'price-desc') return b.price - a.price;
    return 0;
  });
  const categories = [...new Set(currentProducts.map(p => p.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 relative">
      {/* Header with title and controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold capitalize">
          {name?.replace(/-/g, " ") || "All Products"}
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-8 py-3 border-gray-200 rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all shadow-sm hover:border-gray-300"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm hover:border-gray-300 w-full sm:w-auto"
          >
            <FiFilter className="text-accent" />
            <span className="font-medium text-gray-700">Filters</span>
          </button>
        </div>
      </div>

      {/* Filter Drawer */}
      <div className={`fixed inset-0 z-50 transform ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)}></div>
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} className="border-none rounded-full text-gray-500 hover:text-gray-700 w-8 h-8">

                <IoClose className="text-gray-600 w-4 h-8 cursor-pointer" />

              </button>
            </div>

            {/* Filter Sections */}
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={filters.category === category}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="h-4 w-4 text-accent focus:ring-accent"
                      />
                      <span>
                        {category.split('-').map(word =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </span>
                    </label>
                  ))}
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={filters.category === ''}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="h-4 w-4 text-accent focus:ring-accent"
                    />
                    <span>All Categories</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  value={filters.price}
                  onChange={(e) => handleFilterChange('price', e.target.value)}
                >
                  <option value="">All Prices</option>
                  <option value="0-500">Under ₹500</option>
                  <option value="500-1000">₹500 - ₹1000</option>
                  <option value="1000-2000">₹1000 - ₹2000</option>
                  <option value="2000-5000">₹2000 - ₹5000</option>
                  <option value="5000-10000">₹5000 - ₹10000</option>
                  <option value="10000+">Over ₹10000</option>
                </select>
              </div>

              <div>
                <h3 className="font-medium mb-3">Sort By</h3>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  value={filters.sort}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                >
                  <option value="">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-8">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              oldPrice={product.oldPrice}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setFilters({ category: '', price: '', sort: '' });
            }}
            className="mt-4 text-accent hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};
export default Collection;