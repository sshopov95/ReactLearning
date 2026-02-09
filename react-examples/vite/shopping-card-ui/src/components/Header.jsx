import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  const [showDropdown, setShowdropdown] = useState(false);
    
  const { cart, removeFromCart, clearCart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Emaggs</h1>
      <div className="relavite">
        <button
          onClick={() => setShowdropdown(!showDropdown)}
          className="cursor-pointer"
        >
          <FaShoppingCart className="text-2xl text-gray-700" />
          {itemCount > 0 && (
            <span className="abosulte -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
        </button>
        {showDropdown && (
          <div className="abosulte right-0 mt-2 w-80 bg-white border rouded shadow-lg z-50">
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">
                Cart items
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-sm">Your cart is empty</p>
                ) : (
                  <>
                    <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                      {cart.map((item) => (
                        <li className="flex justify-between items-FaCentercode py-2">
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">
                                {item.qty} x {item.price}€
                            </p>
                          </div>
                          <button className="text-sm text-red-500 hover:underline" onClick={()=> {removeFromCart(item.id)}}>Remove</button>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-between font-semibold">
                        <span>
                            Total:
                        </span>
                        <span>
                            {total}€
                        </span>
                    </div>
                    {/* Не е Arrow function защото не се подава параметър*/}
                    <button onClick={clearCart} className="mt-3 w-full bg-red-500 text-white py-1 rounded transition hover:bg-red-600">Clear cart</button>
                  </>
                )}
              </h2>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
