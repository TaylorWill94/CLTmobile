import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about-sec">
        <h1 className="about-bio">
          <span style={{ color: "orange" }}>
            The CLT will support the revitalization of a marginalized community
            of color through the development of affordable housing and
            programming of land.
          </span>{" "}
          <br />
          <br />
          The CLT will own, develop and manage land in order to create a just,
          equitable and resilient Edgemere. The CLT will use grassroots methods
          to plan and develop housing, open-spaces, and amenities to cultivate
          economic, ecological, and cultural vibrancy.
        </h1>
        <Link to="/contact">
          <button className="read-more">contact</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
