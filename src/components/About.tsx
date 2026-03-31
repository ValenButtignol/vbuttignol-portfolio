import '../styles/about.css';
import '../index.css'
import selfpic from '../assets/selfpic.png';

const About = () => {
  return (
    <div className='section-wrapper'>
      <div className='about-title'>
        <h2 className='lb-font bold'>About me</h2>
      </div>
      <div className="about-container">
        <div className="about-text">
          <p className='gray-font'>I'm a <span className='smoothgray-font bold'>Software Engineer</span> with a devotion for creating clean, scalable, and efficient software pieces.</p>
          <p className='gray-font' >My journey into development started in university, where I discovered my passion for full-stack systems and how they power everything users see.</p>
          <p className='gray-font'>I enjoy working across the stack, and always push my self to new technologies. I seek to become a world-class expert in engineering with clean software design overall, but especifically on topics like distributed systems, AI/ML or cybersecurity.</p>
          <div className="core-values">
            <h3 className='darkpurple-font'>Core values</h3>
            <p className='gray-font elegant-font'>Problem Solver, Team Player, Fast Learner</p>
          </div>
        </div>
        <div className="about-photo">
          <div className="photo-placeholder">
            <img src={selfpic}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;