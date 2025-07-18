import { useState } from 'react';
import { useCart } from '../context/useCart';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  id: string;
}

const ProductCard = ({ name, image, price, oldPrice, id }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleAddToCart = () => {
    addToCart({
      id: id || name.toLowerCase().replace(/\s+/g, "-"),
      name,
      price,
      image,
    });
  };
  return (
    <div className="relative group bg-light p-4 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300">
      <div className="relative">
        {/* Product Image */}
        <div className="relative w-full h-44 flex items-center justify-center rounded-md overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-auto object-contain transition duration-300 group-hover:opacity-50"
          />
        </div>
        {/* Preview Modal */}
        {previewImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}>
            <div className="bg-white p-4 rounded-lg max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-bold mb-4">Your {name} in Space</h3>
              <img
                src={previewImage}
                alt={`${name} in your space`}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <button
                className="mt-4 bg-accent text-white px-4 py-2 rounded"
                onClick={() => setPreviewImage(null)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <h3 className="text-base font-semibold text-dark truncate mt-4 font-heading">
        {name}
      </h3>

      <div className="flex items-center justify-between mt-2 text-dark">
        <div>
          {oldPrice && (
            <span className="text-steel line-through text-sm mr-2">
              ₹{oldPrice.toFixed(2)}
            </span>
          )}
          <span className="text-brand font-bold text-md">
            ₹{price.toFixed(2)}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-accent text-white px-4 py-2 rounded-lg shadow-lg border-none outline-none opacity-0 group-hover:opacity-100 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>

  );
};

export default ProductCard;