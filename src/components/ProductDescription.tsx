import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { allProducts } from "../context/Collections";
import { products as staticProducts } from "../components/ProductGrid";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useCart } from "../context/useCart"; // ✅ Import cart hook

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  category?: string;
  createdAt?: string;
}

const ProductDescription = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ Access cart context

  useEffect(() => {
    const allItems: Product[] = [
      ...Object.values(allProducts).flat(),
      ...staticProducts,
    ];
    const found = allItems.find((item): item is Product => !!item && item.id === id);
    setProduct(found || null);

    if (found) {
      const related = allItems.filter(
        (item) =>
          item.id !== found.id &&
          "category" in item &&
          item.category &&
          item.category === found.category
      );
      setRelatedProducts(
        related.length > 0
          ? related
          : allItems.filter((i) => i.id !== found.id).slice(0, 4)
      );
    }
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <p className="text-gray-500 text-lg">Product not found.</p>
        <Link to="/" className="text-accent mt-4 block hover:underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/" className="flex items-center text-accent mb-6 hover:underline">
        <FiArrowLeftCircle className="mr-2" size={20} />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-contain rounded-xl border"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4">
            A sectional sofa or an L shaped sofa can make a great addition to your living room based on your needs.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-semibold text-gray-800">
              ₹{product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="line-through text-gray-400 text-lg">
                ₹{product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-yellow-500 mb-2">
            {"★".repeat(5)}
            <span className="text-sm text-gray-600 ml-2 underline cursor-pointer">441 reviews</span>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="flex-1 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-black">
              Buy Now
            </button>

            <button
              onClick={() => {
                if (product) {
                  addToCart(product); // ✅ Add product to cart
                  navigate("/cart");  // ✅ Navigate to cart page
                }
              }}
              className="flex-1 py-3 border border-gray-400 rounded-lg font-medium hover:bg-gray-100"
            >
              Add to Basket
            </button>
          </div>

          <div className="text-sm text-gray-600">
            <p>
              <strong>Dispatched in:</strong> 5 – 7 weeks
            </p>
            <p className="underline cursor-pointer">Why the longer lead time?</p>
            <p className="mt-2">
              <strong>Home Delivery:</strong> ₹ 510
            </p>
          </div>
        </div>
      </div>

      {/* Recently Viewed Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Recently viewed</h2>
        <div className="flex gap-6 overflow-x-auto">
          {relatedProducts.map((item) => (
            <div key={item.id} className="min-w-[160px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded-xl"
              />
              <p className="text-sm mt-1">{item.name}</p>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
