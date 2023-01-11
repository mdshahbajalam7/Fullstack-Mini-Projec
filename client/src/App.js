import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Lognin from "./components/page/Lognin";
import Signup from "./components/page/Signup";
export const BaseUrl = "http://localhost:8080/auth";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lognin" element={<Lognin />} />
      </Routes>
    </div>
  );
}

export default App;
