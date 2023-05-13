import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/about">About</Link>
      <Link to="/vans" >Vans</Link>
    </nav>
  );
};

export default Navbar;
