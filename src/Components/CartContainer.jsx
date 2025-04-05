import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((store) => store.cart);
  return (
    <main>
      {cartItems.length > 0 ? (
        <>
          <h1>Your Bag</h1>
          <div className="items">
            <CartItem />
            <div className="total">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
          <button
            className="clearCart"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
        </>
      ) : (
        <>
          <h1>Your Bag</h1>
          <h2>Is empty..</h2>
        </>
      )}
    </main>
  );
};

export default CartContainer;
