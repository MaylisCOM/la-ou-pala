"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkInit = document.body.classList.contains("dark");
    setIsDark(isDarkInit);
  }, []);

  const toggleTheme = () => {
    const isNowDark = !isDark;
    document.body.classList.toggle("dark", isNowDark);
    setIsDark(isNowDark);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const themeIcon = isDark ? "/img/soleil.png" : "/img/lune.png";
  const altText = isDark ? "Passer en mode clair" : "Passer en mode sombre";

  return (
    <header className="main-header">
      <button className="burger" onClick={toggleMenu} aria-label="Menu">MENU</button>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`} id="nav-links">
        <li><a href="#"><i className="ai-home"></i><span>Home</span></a></li>
        <li><a href="#"><i className="ai-image"></i><span>Mes travaux</span></a></li>
        <li><a href="#"><i className="ai-person"></i><span>Contact</span></a></li>
        <li>
          <button id="theme-toggle" aria-label={altText} onClick={toggleTheme}>
            <img src={themeIcon} alt={altText} style={{ width: "1.8rem", height: "1.8rem" }} />
          </button>
        </li>
      </ul>
    </header>
  );
}
