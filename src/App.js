import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import About from "./Components/About";
function App() {
  return (
    <div className="homepage_bg min-h-screen flex flex-col font-inter bg-richblack-900">
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<About/>} path="/about"/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
