import React, { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const navItems = ["Home", "Project", "About", "Contact"];

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex justify-center items-center relative top-3">
      <nav
        className="flex p-1 gap-1 border rounded-full border-white/15 bg-white/10 backdrop-blur"
        aria-label="main navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.toLowerCase()}
            href={`#${item.toLowerCase()}`}
            className={
              activeLink === item.toLowerCase()
                ? "nav-items nav-items-active"
                : "nav-items"
            }
            onClick={() => handleClick(item.toLowerCase())}
            aria-current={
              activeLink === item.toLowerCase() ? "page" : undefined
            }
            aria-label={`View ${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Header;
