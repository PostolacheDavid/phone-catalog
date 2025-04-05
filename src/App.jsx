import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import Modal from "./Components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((store) => {
    return store.cart;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <>
      <Modal />
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
