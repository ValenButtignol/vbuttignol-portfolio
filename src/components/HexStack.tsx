import { useEffect, useState } from "react";
import "../styles/hexstack.css";


const HexStack: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Espera un frame para disparar la animación después del render
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hex-container">
      <svg
        className={`hexagon ${animate ? "animate" : ""}`}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexágono principal */}
        <polyline
          points="180,145 100,190 20,145 20,55 100,10"
          className="hex-outline"
        />

        {/* Líneas punteadas (por ej. tecnologías en aprendizaje) */}
        <polyline
          points="180,55 180,145"
          className="hex-outline dashed"
        />
        <polyline
          points="100,10 180,55"
          className="hex-outline dashed"
        />
      {/* <polygon
        points="135,121.25 100,140 65,121.25 65,78.75 100,60 135,78.75"
        className="hex-outline faint"
      /> */}
      </svg>

    </div>
  );
};

export default HexStack;
{/* <div className={`tech-labels ${animate ? "show" : ""}`}>
  <span style={{ top: "20%", left: "45%" }}>Python</span>
  <span style={{ top: "40%", left: "65%" }}>Go</span>
  <span style={{ top: "65%", left: "55%" }}>TS</span>
  <span style={{ top: "65%", left: "35%" }}>Java</span>
  <span style={{ top: "40%", left: "25%" }}>JS</span>
  </div> */}