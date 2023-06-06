import { Link } from "react-router-dom";
import "./Faq.css";

function Faq() {
  return (
    <div className="mission">
      <div className="mission-sec">
        <h1 className="mission-bio">
          <span style={{ color: "orange", fontSize: "32px" }}>CLT 101</span>{" "}
          <br />
          <br />
          Twitter @realedgemereclt
        </h1>
        {/* <Link to="/about">
          <button className="read-more">read more</button>
        </Link> */}
      </div>
    </div>
  );
}

export default Faq;
