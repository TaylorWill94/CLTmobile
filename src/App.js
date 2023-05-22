import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Mission from "./components/Mission/Mission";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import SiteNav from "./components/SiteNav/SiteNav";
import Events from "./components/Events/Events";
import Success from "./components/Success";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
      <SiteNav />
      <Footer />
    </>
  );
}

export default App;
