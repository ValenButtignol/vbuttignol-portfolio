import { useEffect, useRef } from "react";
import "../styles/hexstack.css";

import * as THREE from 'three';

const HexStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  useEffect(() => {
    //const technologies = ["JavaScript", "TypeScript", "React", "Node.js", "Java"];
    if (!containerRef.current) return;
    
    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.y = 500;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer( {antialias: true, alpha:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight( 0x000000, 1.5 );
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight( 0xf0f0f0, 1.5, 0, 0 );
    camera.add(pointLight);
    scene.add(camera);

    // Define materials with colors
    const geometry = new THREE.IcosahedronGeometry(75);
    const material = new THREE.MeshPhongMaterial({ color: 0x64ffda, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  
    // Animation loop
    const animate = () => {
      const timer = Date.now() * 0.0001;

      camera.position.x = Math.cos(timer) * 800;
      camera.position.z = Math.sin(timer) * 800;
      camera.lookAt(scene.position);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.rotation.x = timer * 1.5;
          object.rotation.y = timer * 0.5;
        }
      });

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    handleResize();

    containerRef.current.appendChild(renderer.domElement);
    renderer.setAnimationLoop(animate);

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className='hex-stack-container' />
}

export default HexStack;