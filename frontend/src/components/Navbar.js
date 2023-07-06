import { Link } from "react-router-dom";
import App from "../App";

const Navbar = () => {
  return (
    <header>
      <div className="containers">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
