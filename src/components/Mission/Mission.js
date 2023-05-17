import { Link } from "react-router-dom";
import "./Mission.css";

function Mission() {
  return (
    <div className="mission">
      <div className="mission-sec">
        <h1 className="mission-bio">
          <span style={{ color: "orange" }}>
            The CLT will support the revitalization of a marginalized community
            of color through the development of affordable housing and
            programming of land.
          </span>{" "}
          The CLT will own, develop and manage land in order to create a just,
          equitable and resilient Edgemere. The CLT will use grassroots methods
          to plan and develop housing, open-spaces, and amenities to cultivate
          economic, ecological, and cultural vibrancy.
        </h1>
        <Link to="/about">
          <button className="read-more">read more</button>
        </Link>
      </div>
    </div>
  );
}

export default Mission;
