import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="site-title">
          The ReAL Edgemere <br /> Community Land Trust
        </h1>
      </Link>
      <Link to="/mission">
        <p className="nav-item">Mission</p>
      </Link>
      <p className="nav-item">About</p>
      <p className="nav-item">Contact</p>
    </nav>
  );
}

export default Nav;
