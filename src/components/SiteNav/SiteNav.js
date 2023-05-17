import { Link } from "react-router-dom";
import "./SiteNav.css";

function SiteNav() {
  return (
    <div className="site-nav">
      <h1 className="site-nav-title">
        The ReAL Edgemere <br /> Community Land Trust
      </h1>

      <div className="sec-1">
        <Link to="/about">
          <ul>About</ul>
        </Link>
        <hr />
      </div>

      <div className="sec-2">
        <Link to="/contact">
          <ul>Contact</ul>
        </Link>
        <hr />
      </div>

      <div className="sec-3">
        <Link to="/mission">
          <ul>Mission</ul>
        </Link>
        <hr />
      </div>
    </div>
  );
}

export default SiteNav;
