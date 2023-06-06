import "./About.css";
import plans from "./plans.png";

function About() {
  return (
    <div className="about">
      <div className="about-sec">
        <h1 className="about-bio">
          <span style={{ color: "orange" }}>
            We are a new non-profit community organization, dedicated toß
            community control of land in Edgemere:
          </span>{" "}
          <br />
          <br />
          Formed by local residents who successfully bided on 119 vacant-City
          owned HDP lots (through a competitive process)– so our community can
          have a REAL say in how the lots are developed! We were selected by HPD
          as the winner in Septemberß 2022! We’re doing things a little
          up-side-down! Most CLTs get organized first, and THEN get land… so we
          really gotta get organized to do this right! We need YOUR help to make
          community control in Edgemere a success!
          <br />
          <br />
          <a
            style={{ color: "black" }}
            href="https://www.nyc.gov/site/hpd/services-and-information/edgemere.page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resilient Edgemere
          </a>
        </h1>
        <img className="plans-img" src={plans} alt="shows community plans" />
      </div>
    </div>
  );
}

export default About;
