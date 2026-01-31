import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center bg-[#F8FAFC] p-4 rounded-lg shadow">
      <div>
        <h4 className="font-semibold">{item.title}</h4>
        <p>₹ {item.price}</p>
        <p>Total: ₹ {item.price * item.quantity}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          +
        </button>

        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-3 text-red-600 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
