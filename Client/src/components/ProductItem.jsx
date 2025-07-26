import { useCart } from "../context/CartContext";

export default function ProductItem({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
