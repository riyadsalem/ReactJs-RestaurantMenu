import "./Body.css";
import Menu from "./Menu/Menu";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact } from "../../Pages/index";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Body;
