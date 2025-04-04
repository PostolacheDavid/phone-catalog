import { useSelector } from "react-redux";

const CartItem = () => {
  const items = useSelector((store) => store.cart.cartItems);

  return items.map((item) => {
    return <p key={item.id}>CartItem {item.id}</p>;
  });
};

export default CartItem;
