import "./About.css";
import plans from "./plans.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-sec">
          <div className="about-sec-2">
            <h1 className="about-bio">
              <span style={{ color: "orange" }}>
                We are a new non-profit community organization, dedicated to
                community control of land in Edgemere:
              </span>{" "}
              <br />
              <br />
              Formed by local residents who successfully bided on 119
              vacant-City owned HDP lots (through a competitive process). This
              allows the community to have a REAL say in how the lots are
              developed! We were selected by HPD as the winner in September
              2022! We're doing things a little differently (or reverse), most
              CLT's get organized first, then the land, we got the Land first.
              Now it's time to get organized to do this right! We need YOUR help
              to make community control in Edgemere a success!
              <br />
              <br />
            </h1>
          </div>
          <div className="informal-sec">
            <a
              className="sections"
              style={{ color: "orange" }}
              href="https://www.nyc.gov/site/hpd/services-and-information/edgemere.page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Resilient Edgemere</h3>
            </a>
            <br />
            <br />
            <a
              className="sections"
              style={{ color: "orange" }}
              href="https://www.nyc.gov/assets/hpd/downloads/pdfs/services/resilient-edgemere-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3> Resilient Edgemere Community Plan</h3>
            </a>
            <br />
            <br />
            <a
              className="sections"
              style={{ color: "orange" }}
              href="https://www.nyc.gov/assets/hpd/downloads/pdfs/services/resilient-edgemere-progress-report-08-20.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3> Resilient Edgemere Progress Report</h3>
            </a>

            <a
              className="sections"
              style={{ color: "orange" }}
              href="https://drive.google.com/file/d/1S0SgdjSoB9KG1q4Z8ax6bwSnOrfs7z64/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3> ReAL Edgemere CLT Slides</h3>
            </a>
          </div>
          <div className="rfei-section">
            <h1 className="about-bio" style={{ textAlign: "center" }}>
              HPD planning efforts in Edgemere that led up to the competitive
              RFEI process:
            </h1>
            <a
              className="sections"
              style={{ color: "orange" }}
              href="https://nyccli.org/about/mission-and-strategies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>RFEI</h3>
            </a>
          </div>
          <img className="plans-img" src={plans} alt="shows community plans" />
        </div>
      </div>
    </>
  );
}

export default About;
