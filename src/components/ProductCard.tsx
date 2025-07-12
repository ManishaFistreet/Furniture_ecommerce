import { useCart } from "../context/useCart";

interface ProductCardProps {
    name: string;
    image: string;
    price: number;
    oldPrice?: number;
}

const ProductCard = ({ name, image, price, oldPrice }: ProductCardProps) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: name.toLowerCase().replace(/\s+/g, "-"),
            name,
            price,
            image,
        });
    };

    return (
        <div className="relative group bg-light p-4 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300">
            <div className="relative">
                <div className="relative w-full h-44 flex items-center justify-center rounded-md overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-auto object-contain transition duration-300 group-hover:opacity-50"
                    />
                </div>

                <button
                    onClick={handleAddToCart}
                    className="border-none absolute inset-x-0 bottom-1 mx-auto w-max opacity-0 group-hover:opacity-100
                     bg-accent text-white px-5 py-2 rounded-lg shadow-md
                     transition duration-300"
                >
                    Add to Cart
                </button>
            </div>

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