import { useCart } from "../context/useCart";

const CartDrawer = () => {
    const { cart, removeFromCart, clearCart, getTotal } = useCart();

    return (
        <div className="p-4 max-w-md mx-auto bg-gray-100 rounded shadow mt-6">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600">Cart is empty.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center gap-2">
                                <img src={item.image} className="h-12 w-12 object-cover" />
                                <span>{item.name} × {item.quantity}</span>
                                <div className="flex items-center gap-4">
                                    <span>₹{item.price * item.quantity}</span>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 text-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <p className="font-semibold">Total: ₹{getTotal()}</p>
                        <button
                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartDrawer;