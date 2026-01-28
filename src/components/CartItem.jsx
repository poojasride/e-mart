import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <h4>{item.title}</h4>
      <p>Price: ₹ {item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => increaseQty(item.id)}>+</button>
      <button onClick={() => decreaseQty(item.id)}>-</button>
      <button onClick={() => removeFromCart(item.id)}>
        Remove
      </button>

      <p>Total: ₹ {item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;
