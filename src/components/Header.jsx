import React from "react";

function Header() {
  return (
    <header className="flex justify-center items-center fixed top-3 w-full">
      <nav
        className="flex p-1 gap-1 border rounded-full border-white/15 bg-white/10 backdrop-blur"
        aria-label="main navigation"
      >
        <a
          href="#home"
          className="nav-items nav-items-active"
          aria-current="page"
        >
          Home
        </a>
        <a href="#project" className="nav-items" aria-label="View my projects">
          Project
        </a>
        <a href="#about" className="nav-items" aria-label="Learn about me">
          About
        </a>
        <a
          href="#contact"
          className="nav-items"
          aria-label="Get in touch with me"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
