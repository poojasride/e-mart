import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ₹ {totalPrice.toFixed(2)}</h3>
      <h3>Discount (10%): ₹ {discount.toFixed(2)}</h3>
      <h2>Final Price: ₹ {finalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;
