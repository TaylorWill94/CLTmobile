import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Mission from "./components/Mission/Mission";
import About from "./components/About/About";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
