import "./Home.css";
import com from "./community.jpeg";
import group from "./group.jpeg";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-sec">
          <h1 className="message">
            The <span style={{ color: "orange" }}>ReAL</span> Edgemere Community
            Land Trust (CLT) is a community-led and community-focused
            non-profit.{" "}
          </h1>
        </div>
        <div className="img-sec">
          <img
            className="com-img"
            src={com}
            widt="100"
            alt="a group of people"
          />
        </div>
      </div>
      <div className="intro-sec">
        <h1 className="clt-bio">
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
        <div className="img-sec">
          <img
            className="group-img"
            src={group}
            widt="100"
            alt="a group of friends"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
