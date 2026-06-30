import '../index.css';
import '../styles/introduction.css';
import HexStack from './HexStack';
import { Element } from "react-scroll";

const Introduction = () => {
  return (
    <Element name="hero">
      <section className='section-wrapper'>
        <div className="intro-container">
          <div className="intro-text">
            <p className="gray-font elegant-font">Hi there! My name is</p>
            <h1 className='lb-font'>Valentin Buttignol</h1>
            <h2 className="darkpurple-font">Full-stack Developer at <span className='smoothpurple-font bold'>ExxonMobil</span>.</h2>
            <p className='gray-font'>
              I design and build clean, reliable full-stack applications, focusing on performance, scalability, and a smooth user experience.          </p>
          </div>
          <HexStack />
        </div>
        <button className="contact-button">Contact Me &nbsp; ➤</button>
      </section>
    </Element>
  );
};

export default Introduction;