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
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Cart is empty
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 bg-gray-100 p-4 rounded-lg">
            <p>Total: ₹ {totalPrice.toFixed(2)}</p>
            <p className="text-green-600">
              Discount (10%): ₹ {discount.toFixed(2)}
            </p>
            <h3 className="text-xl font-bold mt-2">
              Final Price: ₹ {finalPrice.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
