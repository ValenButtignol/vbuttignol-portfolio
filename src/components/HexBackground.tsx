import React, { useEffect, useRef } from "react";
import "../styles/hexbackground.css";

interface Hexagon {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  direction: number;
}

const HexBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const hexagons: Hexagon[] = Array.from({ length: 25 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 20 + Math.random() * 40,
      speed: 0.1 + Math.random() * 0.2,
      opacity: 0.1 + Math.random() * 0.4,
      direction: Math.random() * 2 * Math.PI,
    }));

    const drawHex = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      hexagons.forEach((h) => {
        h.x += Math.cos(h.direction) * h.speed;
        h.y += Math.sin(h.direction) * h.speed;

        if (h.x < -50) h.x = width + 50;
        if (h.x > width + 50) h.x = -50;
        if (h.y < -50) h.y = height + 50;
        if (h.y > height + 50) h.y = -50;

        ctx.strokeStyle = `rgba(41, 255, 198, ${h.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(41, 255, 198, 0.4)";
        drawHex(h.x, h.y, h.size);
        ctx.stroke();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="hex-canvas" />;
};

export default HexBackground;
