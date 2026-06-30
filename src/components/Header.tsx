import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

import logo from "../assets/logo.svg";
import "../styles/header.css";
import "../index.css";
import { createPortal } from "react-dom";

const Header = () => {
  const [hide, setHide] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > lastScrollY.current &&
        window.scrollY > 80
      ) {
        setHide(true);
      } else {
        setHide(false);
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <>
      <header className={`header ${hide ? "header--hidden" : ""}`}>
        <Link
          to="hero"
          smooth
          duration={700}
          offset={-70}
          className="header-logo"
        >
          <img src={logo} alt="Logo" />
        </Link>

        <nav className="header-nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              smooth
              spy
              duration={700}
              offset={-70}
              activeClass="header-link-active"
              className="header-link smoothgray-font"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://drive.google.com/file/d/17ptu4h42nAPc2q-FDQd3RdsSoQesmJZY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="header-resume"
          >
            Resume
          </a>
        </nav>

        <button
          className="burger-button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    </header>

      {/* MOBILE MENU */}

    { createPortal(
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.nav
              className="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  smooth
                  spy
                  duration={700}
                  offset={-70}
                  className="mobile-link"
                  activeClass="mobile-link-active"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mobile-divider" />

              <a
                href="https://drive.google.com/file/d/17ptu4h42nAPc2q-FDQd3RdsSoQesmJZY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-resume"
                onClick={closeMenu}
              >
                Resume ↗
              </a>
            </motion.nav>
          </>
        )}
        </AnimatePresence>,
      document.body)}
    </>
  );
};

export default Header;