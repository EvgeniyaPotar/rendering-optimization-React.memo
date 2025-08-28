import { memo } from "react";

const CartItem = ({ item, onAddCount, onDeleteItem }) => {
  console.log("render CartItem");
  return (
    <li key={item.id}>
      {item.title} (Кол-во: {item.count})
      <button onClick={() => onAddCount(item.id)}>+1</button>
      <button onClick={() => onDeleteItem(item.id)}>Удалить</button>
    </li>
  );
};

export default memo(CartItem);
