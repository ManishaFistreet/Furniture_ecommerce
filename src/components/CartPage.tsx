import React from "react";
import { useCart } from "../context/useCart";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 0;
  const total = cartSubtotal - discount;

  return (
    <div className="min-h-screen bg-[#f7f7f7] py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Shopping Bag (Left Panel) */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Shopping Bag</h2>
          <p className="text-sm text-gray-500 mb-6">{cart.length} item(s) in your bag</p>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="rounded-xl border border-gray-100">
              {cart.map((item, index) => (
                <div key={item.id}>
                  <div className="flex justify-between items-center px-4 py-4">
                    <div className="flex items-center gap-4 w-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover rounded"
                      />
                      <div className="flex flex-col justify-between w-full">
                        <div className="flex justify-between items-center">
                          <h3 className="text-base font-semibold">{item.name}</h3>
                          <p className="font-medium text-gray-800">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          ₹{item.price.toLocaleString()} × {item.quantity}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 bg-gray-200 rounded text-sm"
                          >
                            -
                          </button>
                          <span className="w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 bg-gray-200 rounded text-sm"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                             className="ml-4 text-sm text-red-500 bg-transparent border-none outline-none hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Divider between items */}
                  {index !== cart.length - 1 && <hr className="border-t border-gray-200 mx-4" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Panel */}
        <div className="bg-white rounded-xl shadow p-6 space-y-8 w-full">
          {/* Calculated Shipping */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 text-sm">Calculated Shipping</h3>
            <div className="flex gap-2">
              <select className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none">
                <option>Country</option>
                <option>India</option>
                <option>USA</option>
              </select>
              <select className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none">
                <option>State / City</option>
              </select>
            </div>
               <input
              type="text"
              placeholder="Pincode"
              className="w-50 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
            />
            <button className="w-full bg-black text-white py-2 rounded text-sm hover:bg-gray-900 transition mt-2">
              Update
            </button>
          </div>

          {/* Coupon Code */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800 text-sm">Coupon Code</h3>
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-50 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
            />
            <button className="w-full bg-black text-white py-2 rounded text-sm hover:bg-gray-900 transition">
              Apply
            </button>
          </div>

          {/* Cart Total Summary */}
          <div className="bg-[#fff7ec] p-4 rounded-xl space-y-2 text-sm border border-orange-300">
            <div className="flex justify-between">
              <span className="text-gray-700">Cart Subtotal</span>
              <span className="font-medium">₹{cartSubtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Discount</span>
              <span className="text-red-500 font-medium">-₹{discount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-base font-semibold pt-2 border-t border-gray-300">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <button className="w-full mt-2 bg-black hover:bg-orange-500 text-white font-semibold py-2 rounded text-sm transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
