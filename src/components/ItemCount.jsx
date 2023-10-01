import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);
  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div>
      <button onClick={restar}>-</button>
      <span className="mx-3">{cantidad}</span>
      <button onClick={sumar}>+</button>
      <button onClick={() => onAdd(cantidad)} disabled={stock < 1}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
