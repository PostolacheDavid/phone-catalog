import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import Modal from "./Components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const { cartItems, isLoading } = useSelector((store) => {
    return store.cart;
  });
  const { isOpen } = useSelector((store) => {
    return store.modal;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
