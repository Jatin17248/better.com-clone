import { Route, Routes } from "react-router-dom"; // ✅ Correct import
import "./App.css";
import "./main2.css";
import "./abt2.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Start from "./pages/Start";
import MortageCalc from "./pages/MortageCalc";


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/" element={<About />} />
        <Route path="/start/" element={<Start />} />
        <Route path="/mortgage-calculator/" element={<MortageCalc />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
