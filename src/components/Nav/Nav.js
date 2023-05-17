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

      <div className="nav-sec-items">
        <Link to="/mission">
          <Link to="mission">
            <p className="nav-item">Mission</p>
          </Link>
        </Link>
        <Link to="/about">
          <p className="nav-item">About</p>
        </Link>
        <p className="nav-item">Contact</p>
      </div>
    </nav>
  );
}

export default Nav;
