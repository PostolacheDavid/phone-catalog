import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
  const items = useSelector((store) => store.cart.cartItems);
  return (
    <main>
      {items.length > 0 ? (
        <>
          <h1>Your Bag</h1>
          <div className="items">
            <CartItem />
            <div className="total">
              <p>Total</p>
              <p>$0</p>
            </div>
          </div>
          <button className="clearCart">Clear Cart</button>
        </>
      ) : (
        <div className="emptyBag">
          <h1>Your Bag</h1>
          <p>Is empty..</p>
        </div>
      )}
    </main>
  );
};

export default CartContainer;
