// src/pages/Home.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/style.css";

const allProducts = [
  {
    id: 101,
    name: "Camera",
    price: 249.99,
    image: "images/product1.jpg",
  },
  {
    id: 102,
    name: "Wireless Headphones",
    price: 49.99,
    image: "images/product2.jpg",
  },
  {
    id: 103,
    name: "Smartwatch",
    price: 99.99,
    image: "images/product3.jpg",
  },
  {
    id: 104,
    name: "Bluetooth Speaker",
    price: 29.99,
    image: "images/product4.jpg",
  },
   {
    id: 101,
    name: "Camera",
    price: 249.99,
    image: "images/product1.jpg",
  },
   {
    id: 101,
    name: "Camera",
    price: 249.99,
    image: "images/product2.jpg",
  },
   {
    id: 101,
    name: "Camera",
    price: 249.99,
    image: "images/product3.jpg",
  },
   {
    id: 101,
    name: "Camera",
    price: 249.99,
    image: "images/product4.jpg",
  }
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="container">
      <h2>Featured Products</h2>
      <div className="product-list">
        {allProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
