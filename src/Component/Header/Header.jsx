import "./Header.css";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <div style={{ borderBottom: "1px solid brown", marginBottom: "10px" }}>
      <Navigation />
    </div>
  );
};

export default Header;
