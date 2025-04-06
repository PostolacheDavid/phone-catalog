import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-overlay">
      <aside className="modal">
        <div>
          <h4>Remove all items from your shopping cart?</h4>
          <div className="btn-container">
            <button
              type="button"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Modal;
