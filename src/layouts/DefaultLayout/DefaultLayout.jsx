import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../../components";

const DefaultLayout = () => {
  return (
    <>
      <header>
        <Link to="/" className="site-logo">
          #VANLIFE
        </Link>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
