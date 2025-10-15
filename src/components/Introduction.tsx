import '../index.css';
import '../styles/introduction.css';
import HexStack from './HexStack';

const Introduction = () => {
  return (
    <div>
      <p className="gray-font elegant-font">Hi there! My name is</p>
      <h1 className='lb-font'>Valentin Buttignol</h1>
      <h2 className="darkpurple-font">and I'm a Software Engineer.</h2>
      <p className='gray-font'>I specialize in backend development, with a professional experience and strong academic foundation in building reliable, scalable software. I'm passionate about creating clean, efficient solutions and continuously learning new technologies.</p>
      <button className='contact-button'>Contact Me &nbsp;  ➤</button>
      <HexStack/>
    </div>
  )
}

export default Introduction;