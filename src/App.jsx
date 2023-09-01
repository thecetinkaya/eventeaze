import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
