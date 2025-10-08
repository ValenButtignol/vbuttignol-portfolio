const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center backdrop-blur-sm bg-black/20 z-20">
      
      <nav className="flex gap-6 text-sm">
        <a href="#about" className="hover:text-cyan-300">About</a>
        <a href="#experience" className="hover:text-cyan-300">Experience</a>
        <a href="#projects" className="hover:text-cyan-300">Projects</a>
        <a href="#contact" className="hover:text-cyan-300">Contact</a>
      </nav>
    </header>
  )
}

export default Header;