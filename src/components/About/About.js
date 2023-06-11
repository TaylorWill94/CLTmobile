import "./About.css";
import plans from "./plans.png";

function About() {
  return (
    <div className="about">
      <div className="about-sec">
        <h1 className="about-bio">
          <span style={{ color: "orange" }}>
            We are a new non-profit community organization, dedicated to
            community control of land in Edgemere:
          </span>{" "}
          <br />
          <br />
          Formed by local residents who successfully bided on 119 vacant-City
          owned HDP lots (through a competitive process). This allows the
          community to have a REAL say in how the lots are developed! We were
          selected by HPD as the winner in September 2022! We're doing things a
          little differently (or reverse), most CLT's get organized first, then
          the land, we got the Land first. Now it's time to get organized to do
          this right! We need YOUR help to make community control in Edgemere a
          success!
          <br />
          <br />
          <a
            style={{ color: "orange" }}
            href="https://www.nyc.gov/site/hpd/services-and-information/edgemere.page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resilient Edgemere
          </a>
          <br />
          <br />
          <a
            style={{ color: "orange" }}
            href="https://www.nyc.gov/assets/hpd/downloads/pdfs/services/resilient-edgemere-report.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community Plan
          </a>
          <br />
          <br />
          <a
            style={{ color: "orange" }}
            href="https://www.nyc.gov/assets/hpd/downloads/pdfs/services/resilient-edgemere-progress-report-08-20.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Progress Report
          </a>
          <br />
          <br />
          <h1 className="about-bio">
            HPD planning efforts in Edgemere that led up to the competitive RFEI
            process:
          </h1>
          <br />
          <a
            style={{ color: "orange" }}
            href="https://nyccli.org/about/mission-and-strategies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RFEI
          </a>
          <br />
          <br />
          <br />
          <a
            style={{ color: "orange" }}
            href="https://drive.google.com/file/d/1S0SgdjSoB9KG1q4Z8ax6bwSnOrfs7z64/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReAL Edgemere CLT Slides
          </a>
        </h1>
        <img className="plans-img" src={plans} alt="shows community plans" />
      </div>
    </div>
  );
}

export default About;
