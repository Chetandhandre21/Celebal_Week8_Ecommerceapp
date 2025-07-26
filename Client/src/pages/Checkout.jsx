import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="container">
        <h2>Your cart is empty. Add some products before checkout.</h2>
      </div>
    );
  }

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.cardNumber.trim() || formData.cardNumber.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    if (!formData.expiry.trim()) newErrors.expiry = "Expiry date is required";
    if (!formData.cvv.trim() || formData.cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate order success
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      {orderPlaced ? (
        <div>
          <h3>Thank you for your purchase!</h3>
          <p>Your order totaling ${totalPrice.toFixed(2)} has been placed successfully.</p>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
          </label>

          <label>
            Shipping Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
            />
            {errors.address && <small style={{ color: "red" }}>{errors.address}</small>}
          </label>

          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              maxLength="16"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234123412341234"
            />
            {errors.cardNumber && <small style={{ color: "red" }}>{errors.cardNumber}</small>}
          </label>

          <label>
            Expiry Date:
            <input
              type="month"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
            />
            {errors.expiry && <small style={{ color: "red" }}>{errors.expiry}</small>}
          </label>

          <label>
            CVV:
            <input
              type="password"
              name="cvv"
              maxLength="3"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
            />
            {errors.cvv && <small style={{ color: "red" }}>{errors.cvv}</small>}
          </label>

          <button type="submit">Place Order (${totalPrice.toFixed(2)})</button>
        </form>
      )}
    </div>
  );
}
