import { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import '../styles/header.css';

const Header = () => {
  const [hide, setHide] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHide(true); // scrolling down
      } else {
        setHide(false); // scrolling up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header${hide ? " header--hidden" : ""}`}>
      <a href="/" className='header-logo'><img src={logo}/></a>
      <nav className="header-nav">
        <a href="/" className="header-link"><span className='header-bullet'>•</span> Home</a>
        <a href="#about" className="header-link"><span className='header-bullet'>•</span> About</a>
        <a href="#experience" className="header-link"><span className='header-bullet'>•</span> Experience</a>
        <a href="#projects" className="header-link"><span className='header-bullet'>•</span> Projects</a>
        <a href="#contact" className="header-link"><span className='header-bullet'>•</span> Contact</a>
        <a href="https://drive.google.com/file/d/17ptu4h42nAPc2q-FDQd3RdsSoQesmJZY/view?usp=sharing" target="_blank" className="header-resume">Resume</a>
      </nav>
    </header>
  )
}

export default Header;