import { Link } from "react-router-dom";
import "./SiteNav.css";

function SiteNav() {
  return (
    <div className="site-nav">
      <h1 className="site-nav-title">
        The ReAL Edgemere <br /> Community Land Trust
      </h1>

      <div className="sec-1">
        <ul>About</ul>
        <hr />
      </div>

      <div className="sec-2">
        <ul>Contact</ul>
        <hr />
      </div>

      <div className="sec-3">
        <ul>Mission</ul>
        <hr />
      </div>
    </div>
  );
}

export default SiteNav;
