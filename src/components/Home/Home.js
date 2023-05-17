import "./Home.css";
import com from "./community.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="home-sec">
        <h1 className="message">
          The ReAL Edgemere Community Land Trust (CLT) is a community-led and
          community-focused non-profit.{" "}
        </h1>
      </div>
      <div className="img-sec">
        <img className="com-img" src={com} widt="100" alt="a group of people" />
      </div>
    </div>
  );
}

export default Home;
