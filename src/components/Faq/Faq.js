import "./Faq.css";
import twitter from "./twitter.png";

function Faq() {
  return (
    <div className="mission">
      <div className="mission-sec">
        <h1 className="mission-bio">
          <span style={{ color: "orange", fontSize: "32px" }}>CLT 101</span>{" "}
          <br />
          <br />
          <a
            href="https://twitter.com/realedgemereCLT"
            alt="twitter link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} width="50" alt="twitter icon" />
          </a>
        </h1>
        {/* <Link to="/about">
          <button className="read-more">read more</button>
        </Link> */}
      </div>
    </div>
  );
}

export default Faq;
