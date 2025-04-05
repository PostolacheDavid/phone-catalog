import { useDispatch, useSelector } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import upArrow from "../assets/img/upArrow.png";
import downArrow from "../assets/img/downArrow.png";

const CartItem = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  return cartItems.map((item) => {
    const { id, img, title, price, amount } = item;
    return (
      <div key={id} className="item">
        <img src={img} alt={title} width="64" height="64" />
        <div className="itemsInfo">
          <div className="properties">
            <h4>{title}</h4>
            <h5>${price}</h5>
            <button
              onClick={() => {
                dispatch(removeItem(id));
              }}
            >
              remove
            </button>
          </div>
          <div className="chooseAmount">
            <button
              onClick={() => {
                dispatch(increase({ id }));
              }}
            >
              <img src={upArrow} alt="Increment Button" width="16" heigh="16" />
            </button>
            <p>{amount}</p>
            <button onClick={() => dispatch(decrease({ id }))}>
              <img
                src={downArrow}
                alt="Increment Button"
                width="16"
                heigh="16"
              />
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default CartItem;
