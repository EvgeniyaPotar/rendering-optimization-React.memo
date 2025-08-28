import { useCallback, useState } from "react";
import CartItem from "./CartItem/CartItem.jsx";

const CartProducts = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const addCount = useCallback((id) => {
    setCart((prevCart) => {
      return prevCart.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count + 1 };
        } else {
          return product;
        }
      });
    });
  }, []);

  const deleteProduct = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  }, []);

  const emptyTrash = () => {
    setCart([]);
  };

  return (
    <div className="card">
      <h2>Корзина товаров</h2>
      <ol>
        {cart.map((item) => (
          <CartItem
            item={item}
            onAddCount={addCount}
            onDeleteItem={deleteProduct}
          />
        ))}
      </ol>
      <button onClick={emptyTrash}>Очистить корзину</button>
    </div>
  );
};

export default CartProducts;
