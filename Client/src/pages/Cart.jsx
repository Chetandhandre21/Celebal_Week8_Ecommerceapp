import { useCart } from "../context/CartContext";
import QuantitySelector from "../components/QuantitySelector";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "6px" }}
          />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <QuantitySelector
              qty={item.qty}
              onIncrease={() => increaseQty(item.id)}
              onDecrease={() => decreaseQty(item.id)}
            />
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
