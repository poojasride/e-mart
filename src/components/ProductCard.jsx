import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />

      <h3 className="font-semibold text-sm mb-2 line-clamp-2">
        {product.title}
      </h3>

      <p className="text-lg font-bold mb-3">
        ₹ {product.price}
      </p>

      {isInCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          className="mt-auto bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
