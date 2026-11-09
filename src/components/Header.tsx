import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <Link className="logo" to="/">
        Vivian
      </Link>

      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
