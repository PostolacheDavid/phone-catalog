import cartIcon from "../assets/img/cart.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((store) => store.cart.amount);

  console.log(
    useSelector((store) => {
      console.log(store);
    })
  );
  return (
    <header>
      <nav>
        <h1>Phone Catalog</h1>
        <div className="cartIcon">
          <img src={cartIcon} alt="shopping cart" width="32px" height="32px" />
          <div className="amount">{amount}</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
