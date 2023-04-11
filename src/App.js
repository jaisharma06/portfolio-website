import "./App.css";
import Border from "./Components/Border/Border";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>

      <Border />
      <Footer />
    </div>
  );
}
export default App;
