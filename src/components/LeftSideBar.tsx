import '../styles/leftsidebar.css'
import '../styles/layout.css'

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar" aria-hidden={false}>
      <nav className="left-socials">
        <a href="https://github.com/ValenButtignol" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/valenbuttignol" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://twitter.com/..." target="_blank" rel="noreferrer">Twitter</a>
      </nav>
    </aside>
  )
}

export default LeftSidebar;