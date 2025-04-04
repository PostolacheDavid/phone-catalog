import cartIcon from "../assets/img/cart.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const total = useSelector((store) => store.cart.total);

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
          <div className="amount">{total}</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
