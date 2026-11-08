function Header() {
  return (
    <header className="navbar">
      <a className="logo" href="/">
        Vivian
      </a>

      <nav className="nav-links">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/journal">Journal</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;