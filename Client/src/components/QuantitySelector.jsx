export default function QuantitySelector({ qty, onIncrease, onDecrease }) {
  return (
    <div className="quantity-selector">
      <button onClick={onDecrease} disabled={qty <= 1}>
        -
      </button>
      <span>{qty}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
