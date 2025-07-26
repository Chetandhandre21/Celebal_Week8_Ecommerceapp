import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalCount } = useCart();

  return (
    <header>
      <h1>E-commerce Store</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/cart">
          Cart ({totalCount})
        </Link>{" "}
        | <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}
