import logo from '../assets/logo.svg';
import '../styles/Header.css';
//className="fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center backdrop-blur-sm bg-black/20 z-20"

const Header = () => {
  return (
    <header className="header">
      <a href="/" className='header-logo'><img src={logo}/></a>
      <nav className="header-nav">
        <a href="/" className="header-link">Home</a>
        <a href="#about" className="header-link">About</a>
        <a href="#experience" className="header-link">Experience</a>
        <a href="#projects" className="header-link">Projects</a>
        <a href="#contact" className="header-link">Contact</a>
        <a href="https://drive.google.com/file/d/17ptu4h42nAPc2q-FDQd3RdsSoQesmJZY/view?usp=sharing" target="_blank" className="header-resume">Resume</a>
      </nav>
    </header>
  )
}

export default Header;