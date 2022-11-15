import { Link, Outlet } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Navbar = ({ children }) => {
  return (
    <>
      <nav
        className="ui secondary pointing menu"
        style={{ padding: "10px 0px" }}
      >
        <Link to="/" className="item">
          <i className="youtube icon big blue"></i>
          ScarStream
        </Link>

        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <div className="item">
            <GoogleAuth />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
