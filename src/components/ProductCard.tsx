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
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleAddToCart = () => {
    addToCart({
      id: id || name.toLowerCase().replace(/\s+/g, "-"),
      name,
      price,
      image,
    });
  };

  const handleViewInSpace = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      setIsPreviewLoading(true);
      
      try {
        const formData = new FormData();
        formData.append('room', file);
        formData.append('furniture_id', id);

        const response = await fetch('/api/ai-visualize', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (data.url) {
          setPreviewImage(data.url);
        }
      } catch (error) {
        console.error('Preview generation failed:', error);
        alert('Failed to generate preview. Please try again.');
      } finally {
        setIsPreviewLoading(false);
      }
    };

    input.click();
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
          <div className="flex justify-center gap-2 absolute inset-x-0 mx-auto opacity-0 group-hover:opacity-100 transition duration-300">
          <button
            onClick={handleAddToCart}
            className="bg-accent text-white px-4 py-2 rounded-lg shadow-lg border-none outline-none"
          >
            Add to Cart
          </button>
          <button 
            onClick={handleViewInSpace}
            disabled={isPreviewLoading}
            className="bg-brand text-white px-4 py-2 rounded-lg shadow-lg border-none disabled:opacity-50"
          >
            {isPreviewLoading ? 'Generating...' : 'View in Space'}
          </button>
        </div>
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

        {/* Action Buttons */}
        

      {/* Product Info */}
      <h3 className="text-base font-semibold text-dark truncate mt-4 font-heading">
        {name}
      </h3>

      <div className="mt-2 text-dark">
        {oldPrice && (
          <span className="text-steel line-through text-sm mr-2">
            ₹{oldPrice.toFixed(2)}
          </span>
        )}
        <span className="text-brand font-bold text-md">
          ₹{price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;